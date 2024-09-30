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


// import React from 'react';
// import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import '../App.css'

// function PropertyList({ properties, selectProperty, addToFavorites, favorites }) {
//   return (

//     <div className='m-10 flex-col'>

//     <div className='p-4'>
//        <h2 className='h2'>location de maison et appartement</h2>
//         <p>trouvez la maison ou l'appartement de vos rêves à bon prix</p>
//      </div>
//     <ul className='flex w-full justify-around grid-cols-4 flex-wrap'>
//       {properties.map(property => (
//         <li key={property.id} onClick={() => selectProperty(property)} className='w-80 p-2 relative mb-10 image'>
//           {/* Image avec boutons par-dessus */}
//             <img
//               src={property.img} // Utilise ici le chemin de l'image correcte
//               alt={property.title}
//               className="w-full h-72 object-cover rounded-md"
//             />
//             {/* Bouton de favori */}
//             <button
//               onClick={() => addToFavorites(property.id)}
//               className="absolute top-2 right-2  p-6  "
//             >
//               <FaHeart className="text-[#fff] opacity-2" />
//             </button>

//           <div className=" absolute inset-0 flex justify-center opacity-0 hover:opacity-100 transition-opacity">

//             {/* Boutons de navigation */}
//             <button
//               onClick={() => {/* Fonction pour aller à l'image précédente */}}
//               className="btn1 absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-lg  "
//             >
//               <FaChevronLeft />
//             </button>

//             <button
//               onClick={() => {/* Fonction pour aller à l'image suivante */}}
//               className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-lg"
//             >
//               <FaChevronRight />
//             </button>
//           </div>

//           {/* Détails de la propriété */}
//           <h3 
//           onClick={() => selectProperty(property)}
//           className="text-xl font-semibold cursor-pointer"
//           >
//             {property.title}
//           </h3>
//           <p>{property.location}</p>
//           <p className="font-bold">Prix: {property.price} Fcfa</p>
//         </li>
//       ))}
//     </ul>
//     </div>
//   );
// }

// export default PropertyList;


// import React from 'react';
// import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import '../App.css'; // Assure-toi que ce fichier est bien présent et contient les styles nécessaires



// function PropertyList({ properties, selectProperty, addToFavorites, favorites = [] }) {
//   // Vérification que `properties` n'est pas vide ou undefined
//   if (!properties || properties.length === 0) {
//     return <p>Aucune propriété disponible</p>; // Message si aucune propriété n'est fournie
//   }

//   return (
//     <div className=''>

//       <div className='m-10 flex-col'>
//       <div className='p-4'>
//         <h2 className='h2'>Location de maisons et appartements</h2>
//         <p>Trouvez la maison ou l'appartement de vos rêves à bon prix</p>
//       </div>

//       <ul className='flex w-full justify-around grid-cols-4 flex-wrap'>
//         {properties.map((property) => (
//           <li key={property.id} className='w-80 p-2 relative mb-10 image cursor-auto'>
//             {/* Vérification que `property.img` existe */}
//             {property.img ? (
//               <div className="relative group">
//                 <img
//                   src={property.img} // Utilise ici le chemin de l'image correcte
//                   alt={property.title}
//                   className="w-full h-72 object-cover rounded-md"
//                 />
//                 {/* Bouton de favori */}
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     addToFavorites(property.id);
//                   }}
//                   className="absolute top-2 right-2  p-6"
//                 >
//                   <FaHeart className={`text-${favorites.includes(property.id) ? 'red-500' : 'white'}`} />
//                 </button>

//                 {/* Boutons de navigation */}
//                 <div className="absolute inset-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       /* Fonction pour aller à l'image précédente */
//                     }}
//                     className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-lg"
//                   >
//                     <FaChevronLeft />
//                   </button>

//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       /* Fonction pour aller à l'image suivante */
//                     }}
//                     className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-lg"
//                   >
//                     <FaChevronRight />
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <p>Image non disponible</p>
//             )}

//             {/* Détails de la propriété */}
//             <h3
//               onClick={() => selectProperty(property)}
//               className="text-xl font-semibold cursor-pointer"
//             >
//               {property.title}
//             </h3>
//             <p >{property.location}</p>
//             <p className="font-bold cursor-auto">Prix: {property.price} Fcfa</p>
//           </li>
//         ))}
//       </ul>

//       <div className='w-full text-center'>
//         <h1 className='font-semibold text-xl  pb-8 capitalize'>poursuivre l'exploration des maisons</h1>
//         <button className='bg-black text-white text-lg rounded-md px-10 py-4 capitalize '>affichez plus</button>
//       </div>

//       </div>
      
//       <Footer/>
//     </div>
//   );
// }

// export default PropertyList;

import React, { useState } from 'react';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {Footer} from '../Footer.jsx'
import Favorites from './Favorites.jsx' 
import '../App.css';

function PropertyList({ properties, selectProperty, addToFavorites, favorites = [] }) {
  return (
    <div className="">
      <div className='m-10 flex-col'>
      <div className="p-4">
        <h2 className="h2">Location de maisons et appartements</h2>
        <p>Trouvez la maison ou l'appartement de vos rêves à bon prix</p>
      </div>

      <ul className="flex w-full justify-around grid-cols-4 flex-wrap">
        {properties.map((property) => (
          <li key={property.id} className="w-80 p-2 relative mb-10 image">
            <PropertySlider property={property} addToFavorites={addToFavorites} favorites={favorites} />
            
            {/* Détails de la propriété */}
            <h3
              onClick={() => selectProperty(property)}
              className="text-xl font-semibold cursor-pointer"
            >
              {property.title}
            </h3>
            <p>{property.location}</p>
            <p className="font-bold">Prix: {property.price} Fcfa</p>
          </li>
        ))}
      </ul>
      <div className='w-full text-center'>
        <h1 className='font-medium text-xl  py-8 capitalize'>poursuivre l'exploration des maisons</h1>
        <button className='bg-teal-800 text-white text-lg rounded-md px-10 py-4 capitalize '>affichez plus</button>
      </div>
      </div>
     <Footer/>
    </div>
  );
}


 


// Composant Slider pour gérer le changement d'image
function PropertySlider({ property, addToFavorites, favorites }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    const newIndex = (currentImageIndex - 1 + property.images.length) % property.images.length;
    setCurrentImageIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % property.images.length;
    setCurrentImageIndex(newIndex);
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite); // Inverse l'état du favori
    if (!isFavorite) {
      addToFavorites(property); // Ajoute à la liste des favoris si c'est cliqué
    }
  };


  return (
    <div className="relative group">
      {/* Affichage de l'image courante */}
      <img
        src={property.images[currentImageIndex]} // Affiche l'image courante
        alt={property.title}
        className="w-full h-72 object-cover rounded-md"
      />

      {/* Bouton de favori */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToFavorites(property.id);
        }}
        className="absolute top-2 right-2 p-6 text-2xl"
      >
        <FaHeart className={`text-${favorites.includes(property.id) ? 'red-500' : 'white'}`} />
      </button>

    {/* <button
      onClick={handleFavoriteClick}
      className={`p-2 rounded-full border border-black 
      ${isFavorite ? 'bg-red-500 text-white' : 'bg-white text-black'}`} // Change les styles selon l'état
      style={{
        backgroundColor: isFavorite ? 'red' : 'transparent',
        color: isFavorite ? 'white' : 'black',
        border: '2px solid black',
      }}
    >
      <FaHeart />
    </button> */}

      {/* Boutons de navigation */}
      <div className="absolute inset-0 flex justify-center  group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            previousImage();
          }}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-lg"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-lg"
        >
          <FaChevronRight />
        </button>
      </div>

      
    </div>
  );
}

export default PropertyList;

