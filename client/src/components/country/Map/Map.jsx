import { useEffect } from 'react';
import ymaps from 'ymaps';

function YandexMap() {
  useEffect(() => {
    ymaps.ready(init);
  }, []);

  function init() {
    const myMap = new ymaps.Map('map', {
      center: [55.751574, 37.573856], // Замените на желаемые координаты
      zoom: 10, // Замените на желаемый уровень приближения
      controls: [], // Удалите элементы управления карты, если необходимо
    });
  }
  <div id='map' style={{ width: '100%', height: '400px' }}></div>;
}

export default YandexMap;
