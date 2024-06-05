import React, { useEffect, useRef } from 'react';
import ymaps from 'ymaps';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    ymaps.load(
      'https://api-maps.yandex.ru/2.1/?apikey=c8e2e7f6-5188-47a9-912f-41d81dd401dd&lang=ru_RU',
      () => {
        const myMap = new ymaps.Map(mapRef.current, {
          center: [55.751574, 37.573856],
          zoom: 9,
          controls: [],
        });

        // Add your map configuration and event handlers here

        // Example: Add a marker
        const myPlacemark = new ymaps.Placemark(
          [55.751574, 37.573856],
          {
            hintContent: 'Москва',
          },
          {
            iconLayout: 'default#image',
            iconImageHref: 'https://img.icons8.com/color/48/000000/marker.png',
            iconImageSize: [29, 40],
            iconImageOffset: [-14, -38],
          },
        );

        myMap.geoObjects.add(myPlacemark);
      },
    );
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
