// // import React from 'react';

// // function PropertyDetails({ property, goBack, addToFavorites, removeFromFavorites, isFavorite }) {
// //   if (!property) return null;

// //   return (
// //     <div className="property-details">
// //       <button onClick={goBack}>Retour</button>
// //       <h2>{property.titre}</h2>
// //       <p>{property.description}</p>
// //       <p>Prix : {property.prix}</p>
// //       <button onClick={() => (isFavorite ? removeFromFavorites(property.id) : addToFavorites(property.id))}>
// //         {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
// //       </button>
// //     </div>
// //   );
// // }

// // export default PropertyDetails;


// import React from 'react';
// // import { useParams } from 'react-router-dom';
// import { FaHeart } from 'react-icons/fa';

// function PropertyDetails({ properties }) {
//   const { id } = useParams();
//   const property = properties.find(p => p.id === parseInt(id));

//   if (!property) {
//     return <div>Propriété non trouvée</div>;
//   }

//   return (
//     <div className="property-details max-w-4xl mx-auto my-10">
//       {/* Section des images */}
//       <div className="relative">
//         <div className="flex overflow-x-scroll space-x-4">
//           {property.images.map((img, index) => (
//             <img key={index} src={img} alt={`Image ${index + 1}`} className="w-full h-96 object-cover" />
//           ))}
//         </div>
//         {/* Bouton de favori en haut à droite */}
//         <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg">
//           <FaHeart className="text-red-500" />
//         </button>
//       </div>

//       {/* Description de la propriété */}
//       <div className="my-8">
//         <h1 className="text-3xl font-bold">{property.title}</h1>
//         <p className="text-lg my-4">{property.description}</p>
//         <p className="text-xl font-semibold">Prix: {property.price} Fcfa</p>
//         <p>bonjour à vous</p>
//         <p className="text-md my-2">Localisation: {property.location}</p>
//       </div>

//       {/* Formulaire de réservation */}
//       <div className="my-8">
//         <h2 className="text-2xl font-bold mb-4">Réserver cette propriété</h2>
//         <form className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Nom complet
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Votre nom"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Votre email"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//               Téléphone
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Votre numéro de téléphone"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//           >
//             Réserver
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default PropertyDetails;

// import React from 'react';

// function PropertyDetails({ property, goBack }) {
//   return (
//     <div className="property-details p-8">
//       <button onClick={goBack} className="bg-gray-200 p-2 rounded-md mb-4">Retour</button>

//       {/* Div contenant les images */}
//       <div className="flex">
//         {/* Image principale (grande) */}
//         <div className="w-3/5 pr-4">
//           <img
//             src={property.images[0]} // Affiche la première image en grand
//             alt="Main Property"
//             className="w-full h-96 object-cover rounded-md"
//           />
//         </div>

//         {/* 4 images plus petites à droite */}
//         <div className='grid grid-cols-2 gap-2 w-2/5 flex-wrap'>
//         <div className="w-1/4 ">
//           {property.images.slice(1, 5).map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`property-${index}`}
//               className="w-full h-24 object-cover rounded-md"
//             />
//           ))}
//         </div>
//         <div className="w-1/4 ">
//           {property.images.slice(1, 5).map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`property-${index}`}
//               className="w-full h-24 object-cover rounded-md"
//             />
//           ))}
//         </div>
//         <div className="w-1/4 ">
//           {property.images.slice(1, 5).map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`property-${index}`}
//               className="w-full h-24 object-cover rounded-md"
//             />
//           ))}
//         </div>
//         <div className="w-1/4 ">
//           {property.images.slice(1, 5).map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`property-${index}`}
//               className="w-full h-24 object-cover rounded-md"
//             />
//           ))}
//         </div>

//         </div>
//       </div>

//       {/* Description */}
//       <div className="description my-4">
//         <h1 className="text-3xl font-bold">{property.title}</h1>
//         <p>{property.description}</p>
//         <p>Prix: {property.price} Fcfa</p>
//       </div>

//       {/* Formulaire de réservation */}
//       <form className="reservation-form mt-8">
//         <input type="text" placeholder="Votre nom" className="p-2 border mb-4 w-full" />
//         <input type="email" placeholder="Votre email" className="p-2 border mb-4 w-full" />
//         <button type="submit" className="bg-blue-500 p-2 text-white w-full">Réserver</button>
//       </form>
//     </div>
//   );
// }

// export default PropertyDetails;

import React from 'react';
import { FaRestroom } from 'react-icons/fa';

function PropertyDetails({ property, goBack }) {
  return (
    <div className="">
      <div className="property-details px-28 py-10 gap-4">
      <button onClick={goBack} className="bg-gray-200 p-2 rounded-md mb-4">Retour</button>

      {/* Div contenant les images */}
      <div className="flex ">
        {/* Image principale (grande) */}
        <div className="w-1/2 pr-2">
          <img
            src={property.images[0]} // Affiche la première image en grand
            alt="Main Property"
            className="w-full h-96 object-cover rounded-l-md"
          />
        </div>

        {/* 4 images plus petites à droite */}
        <div className="w-1/2 grid grid-cols-2 gap-x-2 gap-y-0 ">
          {property.images.slice(1, 5).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`property-${index}`}
              className="w-full h-[11.5rem] object-cover rounded-r-md"
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="description flex  my-8 w-full ">
        <div className='w-[60%] pr-14 flex-1 '>
          <div className='pb-8'>
           <h1 className="text-3xl font-bold">{property.title}</h1>
           <p>{property.description}</p>
           <div className='flex'>
              <p>4,82.</p>
              <a href="#">110 commentaires</a>
           </div>
          </div>

          <div className='flex border-y-2 py-6 '>
            <img src={property.profil} alt="" className='rounded-full w-10'/>
            <div className='flex flex-col pl-4'>
              <p>Séjournez chez 'Nom'</p>
              <p>Superhôte.Maison depuis 2ans</p>
            </div>
          </div>

          <div className='border-b-2 pt-8'>
            <div className='flex pb-7'>
              <FaRestroom/>
              <div className='pl-10'>
              <p className='font-semibold'>Lorem ipsum dolor sit amet.  </p>
              <p className='text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, mollitia velit. </p>
              </div>
            </div>
            <div className='flex pb-8'>
              <FaRestroom/>
              <div className='pl-10'>
              <p className='font-semibold'>Lorem ipsum dolor sit amet.  </p>
              <p className='text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, mollitia velit. </p>
              </div>
            </div>
            <div className='flex pb-8'>
              <FaRestroom/>
              <div className='pl-10'>
              <p className='font-semibold'>Lorem ipsum dolor sit amet.  </p>
              <p className='text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, mollitia velit. </p>
              </div>
            </div>
            <div className='flex pb-8'>
              <FaRestroom/>
              <div className='pl-10'>
              <p className='font-semibold'>Lorem ipsum dolor sit amet.  </p>
              <p className='text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, mollitia velit. </p>
              </div>
            </div>
          </div>

          <div className='border-b-2 py-10'>
            <h3 className='font-semibold text-xl capitalize pb-6 '>à propos de ce logement</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis eveniet natus recusandae, possimus nihil quae, vitae consectetur voluptas aspernatur quisquam, dolore rem quasi quam labore facere iure libero cumque?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa dolores maxime et ipsam quo ipsum fugiat in magni voluptatum.
            </p>
            <p className='pb-6'>...</p>
            <a href="#" className='font-semibold underline '>lire la suite</a>

          </div>

          <div className='py-10 text-base capitalize' >
            <img src={property.images[3]} alt="" className='rounded-md w-96'/>
            <p className='font-semibold'>chambre</p>
            <p>1lit, lorem, lorem, lorem</p>
          </div>
        </div>

        {/* formulaire de réservation */}
        <div className='bg-white shadow-lg rounded-md  w-[35%] h-96 p-4'>
          <p className='text-lg font-bold'>{property.price} Fcfa</p>

          <div className='border-2 rounded-md my-4'>
            <div className='flex'>
              <div className='w-1/2 p-2'>
                <p>arrivée</p>
                <p>17/09/2024</p>
              </div>
              <div className='border-l-2 w-1/2 p-2'>
                <p>arrivée</p>
                <p>17/09/2024</p>
              </div>
            </div>

            <div className='border-t-4 p-2'>
              <p>voyageurs</p>
              <p>1 voyageur</p>
            </div>
          </div>

          <button className='bg-gray-600 text-white capitalize w-full py-2 '>réserver</button>
          <p className='pt-2 text-center text-lg'>Aucun montant ne vous sera débité pour le moment</p>
        </div>
      </div>

      {/* Formulaire de réservation
      <form className="reservation-form mt-8">
        <input type="text" placeholder="Votre nom" className="p-2 border mb-4 w-full" />
        <input type="email" placeholder="Votre email" className="p-2 border mb-4 w-full" />
        <button type="submit" className="bg-blue-500 p-2 text-white w-full">Réserver</button>
      </form> */}

      </div>

      <div className='bg-neutral-200 p-28'>
        <p>copyright@site de location maison,2024</p>
      </div>
    </div>
  );
}

export default PropertyDetails;




