// // // src/components/PropertyList.jsx
// // import React from 'react';
// // import { FaHeart, FaChevronRight, FaChevronLeft } from 'react-icons/fa';


// // function PropertyList({ properties, selectProperty }) {
// //   return (
// //     <div className='m-10 flex-col relative'>
// //         <div className='p-4'>
// //             <h2 className='h2'>location de maison et appartement</h2>
// //             <p>trouvez la maison ou l'appartement de vos rêves à bon prix</p>
// //         </div>
// //       <ul className='flex w-full justify-around grid-cols-4 flex-wrap'>
// //         {properties.map(property => (
// //           <li key={property.id} onClick={() => selectProperty(property)} className='w-80 p-2'>
// //             <img src= {property.img} alt="" className='w-full h-72 object-cover'/>
// //             {/* <FaHeart /> */}
// //             {/* Boutons de navigation */}
// //             <button
// //                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-lg hover:bg-gray-200"
// //               >
// //                 <FaChevronLeft />
// //               </button>
// //               <button
// //                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-lg hover:bg-gray-200"
// //               >
// //                 <FaChevronRight />
// //               </button>
// //             <h3 className='titre'>{property.title}</h3>
// //             <p>{property.location}</p>
// //             <p className='titre'>Prix: {property.price} Fcfa</p>
// //           </li>
// //         ))}
// //       </ul>

// //       <FaChevronRight/>

// //       <h1 className='h2'>poursuivre l'exploitation des chambres d'hôtes</h1>
// //       <button type="submit"> affichez plus</button>
  

// //     </div>
// //   );
// // }

// // export default PropertyList;


import React from 'react';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function PropertyList({ properties, selectProperty, addToFavorites, favorites }) {
  return (

    <div className='m-10 flex-col'>

    <div className='p-4'>
       <h2 className='h2'>location de maison et appartement</h2>
        <p>trouvez la maison ou l'appartement de vos rêves à bon prix</p>
     </div>
    <ul className='flex w-full justify-around grid-cols-4 flex-wrap'>
      {properties.map(property => (
        <li key={property.id} onClick={() => selectProperty(property)} className='w-80 p-2 relative mb-10'>
          {/* Image avec boutons par-dessus */}
          <div className=" relative ">
            <img
              src={property.img} // Utilise ici le chemin de l'image correcte
              alt={property.title}
              className="w-full h-72 object-cover "
            />

            {/* Bouton de favori */}
            <button
              onClick={() => addToFavorites(property.id)}
              className="absolute top-2 right-2  p-2 rounded-full shadow-lg"
            >
              <FaHeart className="text-[#fff] opacity-2" />
            </button>

            {/* Boutons de navigation */}
            <button
              onClick={() => {/* Fonction pour aller à l'image précédente */}}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg  "
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => {/* Fonction pour aller à l'image suivante */}}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Détails de la propriété */}
          <h3 className="text-xl font-semibold">{property.title}</h3>
          <p>{property.location}</p>
          <p className="font-bold">Prix: {property.price} Fcfa</p>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default PropertyList;

// import React from 'react';

// function PropertyList({ properties, selectProperty }) {
//   return (
//     <div className="m-10 flex-col">
//       <div className="p-4">
//         <h2 className="h2">Location de maison et appartement</h2>
//         <p>Trouvez la maison ou l'appartement de vos rêves à bon prix</p>
//       </div>
//       <ul className="flex w-full justify-around grid-cols-4 flex-wrap">
//         {properties.map((property) => (
//           <li
//             key={property.id}
//             onClick={() => selectProperty(property)} // Appelle selectProperty sur clic
//             className="w-80 p-2 "
//           >
//             <img src={property.img} alt={property.title} className="w-full h-72 object-cover rounded-md" />
//             <h3 className="titre">{property.title}</h3>
//             <p>{property.location}</p>
//             <p className="titre">Prix: {property.price} Fcfa</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PropertyList;

