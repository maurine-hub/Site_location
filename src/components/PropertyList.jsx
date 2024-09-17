// src/components/PropertyList.jsx
import React from 'react';
import { FaHeart, FaChevronRight } from 'react-icons/fa';


function PropertyList({ properties, selectProperty }) {
  return (
    <div className='m-10 flex-col '>
        <div className='p-4'>
            <h2 className='h2'>location de maison et appartement</h2>
            <p>trouvez la maison ou l'appartement de vos rêves à bon prix</p>
        </div>
      <ul className='flex w-full justify-around grid-cols-4 flex-wrap'>
        {properties.map(property => (
          <li key={property.id} onClick={() => selectProperty(property)} className='w-80 p-2'>
            <img src= {property.img} alt="" className='w-full h-72 object-cover'/>
            {/* <FaHeart /> */}
           
            <h3 className='titre'>{property.title}</h3>
            <p>{property.location}</p>
            <p className='titre'>Prix: {property.price} Fcfa</p>
          </li>
        ))}
      </ul>

      <FaChevronRight/>

      <h1 className='h2'>poursuivre l'exploitation des chambres d'hôtes</h1>
      <button type="submit"> affichez plus</button>
  

    </div>
  );
}

export default PropertyList;
