import styles from './TargetOverview.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Alien1 from '../../public/images/alien-1.png';
import Alien2 from '../../public/images/alien-2.png';
import Alien3 from '../../public/images/alien-3.png';

export default function TargetOverview() {
  const [rangeValue, setRangeValue] = useState(1);
  const [alienImg, setAlienImg] = useState(Alien1);

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
    <>
      <div className={styles.content}>
        <h1>Target Overview</h1>
        <div className={styles.imageBorder}>
          <Image
            className={styles.image}
            src={alienImg}
            alt='Commander Aldoosi, a color changing alien that is short with extra large round eyes, and horns running down the center of his head.'
          />
        </div>
        <input
          className={styles.rangeSlider}
          type='range'
          min='1'
          max='3'
          value={rangeValue}
          onChange={handleRangeValue}
          aria-label='Slide to see different views of the alien Commander Aldoosi.'
        />
        <ul className={styles.stats}>
          <li>
            COMMANDER ALDOOSI <img src='./images/alien-name.svg' alt='' />
          </li>
          <li>Escaped LunerMax Prison: November 12, 2022</li>
          <li>Changes color with mood: Pink is very bad.</li>
          <li>Thought to be in hiding at the Fulton Fish Market in Hunts Point.</li>
        </ul>
      </div>
    </>
  );
}
