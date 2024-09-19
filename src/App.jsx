// // import { useState } from 'react'
// // import {Header} from './header.jsx'
// // import { Hero } from './hero.jsx'

// // function App() {
// //   const [home, setHome] = useState([]);


// //   const images = (titre, description, prix, localisation) =>{
// //     const properties = {
// //       id: Date.now(),
// //       titre,
// //       description,
// //       prix,
// //       localisation,
// //       image:[],
// //       visibilité: true
// //     };
// //     const updatedHome = localStorage ()

// //   }
// //   const filter = ()=>{
// //     <button className='bg-red'>ChangeColor</button>
// //   }
// //   return (
// //     <>
// //       <Header
// //       filter = {filter} />
// //       <Hero/>
// //     </>
// //   )
// // }

// // export default App


// import React, { useState } from 'react';
// // import BackgroundSlider from './components/BackgroundSlider';
// import PropertyList from './components/PropertyList';
// import PropertyDetails from './components/PropertyDetails';
// import Favorites from './components/Favorites';
// import { properties } from './data/properties';
// import { Header } from './header';
// import { Hero } from './hero';

 

// function App() {
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  
//   const addToFavorites = (propertyId) => {
//     if (!favorites.includes(propertyId)) {
//       const updatedFavorites = [...favorites, propertyId];
//       setFavorites(updatedFavorites);
//       localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//     }
//   };

//   const removeFromFavorites = (propertyId) => {
//     const updatedFavorites = favorites.filter(id => id !== propertyId);
//     setFavorites(updatedFavorites);
//     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//   };

//   return (
//     <div className="App">
//       {/* <h1>Site de Location de Maisons</h1> */}
//       {selectedProperty ? (
//         <PropertyDetails 
//           // property={selectedProperty}
//           // goBack={() => setSelectedProperty(null)}
//           // addToFavorites={addToFavorites}
//           // removeFromFavorites={removeFromFavorites}
//           // isFavorite={favorites.includes(selectedProperty.id)}
//         />
//       ) : (
//         <>
//           {/* <BackgroundSlider /> */}
//           <Header/>
//           <Hero/>
//           <PropertyList properties={properties} selectProperty={setSelectedProperty} />
//           {/* <Favorites properties={properties} favorites={favorites} removeFromFavorites={removeFromFavorites} /> */}
//         </>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
// import BackgroundSlider from './components/BackgroundSlider';
import PropertyList from './components/PropertyList';
import PropertyDetails from './components/PropertyDetails';
import { properties } from './data/properties';
import { Header } from './header';
import { Hero } from './hero';

function App() {
  // État pour la propriété sélectionnée
  const [selectedProperty, setSelectedProperty] = useState(null);

  const selectProperty = (property) => {
    // Lorsqu'une propriété est sélectionnée, on la stocke dans l'état
    setSelectedProperty(property);
  };

  return (
    <div className="App">
      {/* Si une propriété est sélectionnée, afficher PropertyDetails */}
      {selectedProperty ? (
        <PropertyDetails 
          property={selectedProperty}
          goBack={() => setSelectedProperty(null)} // Fonction pour revenir en arrière
        />
      ) : (
        <>
          {/* Sinon, afficher la liste des propriétés */}
          <Header />
          <Hero />
          <PropertyList properties={properties} selectProperty={selectProperty} />
        </>
      )}
    </div>
  );
}

export default App;

