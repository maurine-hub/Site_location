// src/components/Favorites.jsx
import React from 'react';

function Favorites({ properties, favorites, removeFromFavorites }) {
  const favoriteProperties = properties.filter(property => favorites.includes(property.id));

  if (favoriteProperties.length === 0) {
    return <p>Vous n'avez aucun favori.</p>;
  }

  return (
    <div>
      <h2>Vos favoris</h2>
      <ul>
        {favoriteProperties.map(property => (
          <li key={property.id}>
            <img src="" alt="" />
            <h3>{property.title}</h3>
            <p>{property.location}</p>
            <button onClick={() => removeFromFavorites(property.id)}>Retirer des favoris</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
