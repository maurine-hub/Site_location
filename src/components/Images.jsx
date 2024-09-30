

// export function Images (property){
//     return(
//         <div>
//              {/* Div contenant les images */}
//       <div className="flex ">
//         {/* Image principale (grande) */}
//         <div className="w-1/2 pr-2">
//           <img
//             src={property.images[0]} // Affiche la première image en grand
//             alt="Main Property"
//             className="w-full h-96 object-cover rounded-l-md"
//           />
//         </div>

//         {/* 4 images plus petites à droite */}
//         <div className="w-1/2 grid grid-cols-2 gap-x-2 gap-y-0 ">
//           {property.images.slice(1, 5).map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`property-${index}`}
//               className="w-full h-[11.5rem] object-cover rounded-r-md"
//             />
//           ))}
//         </div>
//       </div>
//         </div>
//     );
// }

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function PropertyImages() {
//   const location = useLocation();
//   const { images } = location.state; // Récupère les images passées dans la route

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Images de la propriété</h1>
//       <div className="grid grid-cols-3 gap-4">
//         {images.map((img, index) => (
//           <img key={index} src={img} alt={`property-${index}`} className="w-full h-64 object-cover" />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PropertyImages;


// Images.jsx
import React from 'react';

const Images = ({ images, goBack }) => {
  return (
    <div className="p-8 mx-32 my-10">
      <button onClick={goBack} className="bg-gray-200 p-2 rounded-md mb-4">
        Retour
      </button>
      <div className="grid grid-cols-2  gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            className="w-full h-96 object-cover rounded-md "
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
