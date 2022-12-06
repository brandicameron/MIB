import styles from './ImageSlider.module.css';
import { useState } from 'react';
import Alien1 from '../../public/images/alien-1.png';
import Alien2 from '../../public/images/alien-2.png';
import Alien3 from '../../public/images/alien-3.png';

export default function ImageSlider({ setAlienImg }) {
  const [rangeValue, setRangeValue] = useState(1);

  const handleRangeValue = (e) => {
    const value = parseInt(e.target.value);
    setRangeValue(value);

    switch (value) {
      case 1:
        setAlienImg(Alien1);
        break;
      case 2:
        setAlienImg(Alien2);
        break;
      case 3:
        setAlienImg(Alien3);
        break;
      default:
        setAlienImg(Alien1);
    }
  };

  return (
    <input
      className={styles.rangeSlider}
      type='range'
      min='1'
      max='3'
      value={rangeValue}
      onChange={handleRangeValue}
      aria-label='Slide to see different views of the alien Commander Aldoosi.'
    />
  );
}
