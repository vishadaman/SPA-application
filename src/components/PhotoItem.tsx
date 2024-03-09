import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './photoItems.module.scss';

interface PhotoItemProps {
    photo: {
      id: number;
      title: string;
      thumbnailUrl: string;
    };
    addToFavorites: (id: number) => void;
    removeFromFavorites: (id: number) => void;
    isFavorite: boolean;
  }

  const PhotoItem: React.FC<PhotoItemProps> = ({ photo, addToFavorites, removeFromFavorites, isFavorite }) => {
    const handleButtonClick = () => {
      if (isFavorite) {
        removeFromFavorites(photo.id);
      } else {
        addToFavorites(photo.id);
      }
    };
    
    return (
        <div className={`${styles.cardBlock}`}>
        <Card.Img variant="top" alt={photo.title} src={photo.thumbnailUrl} />
        <div className={`${styles.cardBody}`}>
            <h6 className={`${styles.cardTitle}`}>{photo.title}</h6>
            <button
          className={`btn w-100 btn-sm ${isFavorite ? 'btn-primary' : 'btn-warning'}`}
          onClick={handleButtonClick}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        </div>
        </div>
  );
};

export default PhotoItem;
