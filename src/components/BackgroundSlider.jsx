// src/components/BackgroundSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import 'swiper/swiper-bundle.css'; // Import Swiper styles

import { Autoplay, Pagination, Navigation } from 'swiper'; // Swiper modules

function BackgroundSlider() {
  const slides = [
    { url: 'https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t1.6435-9/95513058_231804471572986_4173290872504320000_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SUGTLCjTBN8Q7kNvgHi1gJp&_nc_ht=z-p3-scontent.fnsi1-2.fna&_nc_gid=AGh3_xyusrvvf4NbulBnjhi&oh=00_AYDcyB0MWSKkCOsB_eK7r8LU4mj65NGDDHc4GljZvqKXLA&oe=670F5FEB', text: 'Slide 1' },
    { url: 'https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t1.6435-9/95608323_231804531572980_5528064905036431360_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-fXPXVf0dGUQ7kNvgGBBrK2&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AYBOX6klMyfNHmquw75au91UHSYq3xy-xA7bhjuUXWtbjg&oe=670F8CE2', text: 'Slide 2' },
    { url: 'https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t1.6435-9/95426627_231804684906298_3246708737032847360_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tfxnK1JjSpsQ7kNvgFVf5H4&_nc_ht=z-p3-scontent.fnsi1-2.fna&_nc_gid=ABzNER8C6AU7jVVwtkh8GSO&oh=00_AYDjwpouVF5G08qSvAWHEiNvDgBS59lS-tfYw_Zcn039jg&oe=670F8532', text: 'Slide 3' },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]} // Use modules for features
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Automatic sliding
      pagination={{ clickable: true }} // Pagination bullets
      navigation={true} // Enable navigation arrows
      loop={true} // Infinite looping
      className="mySwiper"
    >
      {slides.map((slide, index) => (
    <SwiperSlide key={index}>
        <div
            className="w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${slide.url})`,
            }}
          >
            <h2 className="text-white text-4xl">{slide.text}</h2>
        </div>
    </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BackgroundSlider;
