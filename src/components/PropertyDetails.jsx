import React from 'react';

function PropertyDetails({ property, goBack, addToFavorites, removeFromFavorites, isFavorite }) {
  if (!property) return null;

  return (
    <div className="property-details">
      <button onClick={goBack}>Retour</button>
      <h2>{property.titre}</h2>
      <p>{property.description}</p>
      <p>Prix : {property.prix}</p>
      <button onClick={() => (isFavorite ? removeFromFavorites(property.id) : addToFavorites(property.id))}>
        {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      </button>
    </div>
  );
}

export default PropertyDetails;
