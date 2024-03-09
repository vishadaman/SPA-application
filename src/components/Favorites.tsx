import React from 'react';

interface FavoritesProps {
  favorites: number[];
}

const Favorites: React.FC<FavoritesProps> = ({ favorites }) => {
  return (
    <div className='text-center'>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites selected.</p>
      ) : (
        <ul className="list-group" style={{width: '200px', margin: '0 auto'}}>
          {favorites.map((favoriteId) => (
            <li className='list-group-item' key={favoriteId}>Favorite ID: {favoriteId}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
