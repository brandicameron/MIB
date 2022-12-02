import styles from './TargetOverview.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Alien1 from '../../public/images/alien-1.png';
import Alien2 from '../../public/images/alien-2.png';
import Alien3 from '../../public/images/alien-3.png';
import Weapon from '../../public/images/weapon.png';

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
      <section className={styles.content}>
        <h1>Target Overview</h1>
        <div className={styles.imageBorder}>
          <Image
            className={styles.image}
            src={alienImg}
            priority='true'
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
            COMMANDER ALDOOSI <img src='./images/alien-name.svg' alt='' width={105} height={20} />
          </li>
          <li>Escaped LunerMax Prison: November 12, 2022</li>
          <li>Changes color with mood: Pink is bad news.</li>
          <li>Likely in hiding at Fulton Fish Market, Hunts Point.</li>
        </ul>
        <aside className={styles.weaponContainer}>
          <figure>
            <figcaption>
              <span className='bold'>RECOMMENDED WEAPON:</span> Icer
            </figcaption>
            <Image
              src={Weapon}
              alt='Silver gun with black handle grip and ice blue glowing tip, shown at a 45 degree angle.'
            />
          </figure>
        </aside>
        <aside className={styles.galaxyContainer}>
          <figure>
            <figcaption>
              <span className='bold'>HOME GALAXY:</span> Markarian 231
            </figcaption>
            <video
              src='./images/galaxy.mp4'
              autoPlay
              muted
              playsInline
              loop
              width={337}
              height={190}
            ></video>
          </figure>
        </aside>
      </section>
    </>
  );
}
