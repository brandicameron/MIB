import styles from './TargetOverview.module.css';
import { useState } from 'react';
import Alien1 from '../../public/images/alien-1.png';
import ImageSlider from './ImageSlider';
import AlienImg from './AlienImg';
import Stats from './Stats';
import Weapon from './Weapon';
import Galaxy from './Galaxy';

export default function TargetOverview() {
  const [alienImg, setAlienImg] = useState(Alien1);

  return (
    <>
      <section className={styles.content}>
        <h1>Target Overview</h1>
        <AlienImg alienImg={alienImg} />
        <ImageSlider setAlienImg={setAlienImg} />
        <Stats />
        <div className={styles.details}>
          <Weapon />
          <Galaxy />
        </div>
      </section>
    </>
  );
}
