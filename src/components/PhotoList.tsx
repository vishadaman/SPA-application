import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import PhotoItem from './PhotoItem';
import Loader from './Loader';
import { useFavorites } from '../contexts/FavoritesContext';
import { Col, Row } from 'react-bootstrap';

interface PhotoListProps {
  setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
}

const PhotoList: React.FC<PhotoListProps> = ({ setScrollPosition }) => {
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();
  const [photos, setPhotos] = useState<any[]>([]); // Adjust the type if needed
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading, setScrollPosition]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`);
        const newPhotos = response.data.map((photo: any) => ({
          ...photo,
          key: `photo-${photo.id}-page-${page}`,
        }));
        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Row>
      {photos.map((photo: any, index: number) => (
        <Col key={`photo-${photo.id}-index-${index}`} lg={4} className='mb-4'>
            <PhotoItem
            photo={photo}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            isFavorite={favorites.includes(photo.id)}
            />
        </Col>
        ))}
    </Row>
  );
};

export default PhotoList;
