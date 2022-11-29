import styles from './TargetOverview.module.css';
import Image from 'next/image';
import Alien from '../../public/images/alien.png';

export default function TargetOverview() {
  return (
    <main className={styles.container}>
      <h1>Target Overview</h1>
      <div className={styles.targetImg}>
        <Image
          src={Alien}
          alt='Commander Aldoosi, a color changing alien that is short with extra large round eyes, and horns running down the center of his head.'
        />
        <ul className={styles.targetInfo}>
          <li>
            COMMANDER ALDOOSI <img src='./images/alien-name.svg' alt='' />
          </li>
          <li>Escaped LunerMax Prison: November 12, 2022</li>
          <li>Changes color with mood: Pink is very bad.</li>
          <li>Thought to be in hiding at the Fulton Fish Market in Hunts Point.</li>
        </ul>
      </div>
    </main>
  );
}
