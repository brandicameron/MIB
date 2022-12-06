import styles from './WeaponGalaxy.module.css';
import Image from 'next/image';
import WeaponImg from '../../public/images/weapon.png';

export default function Weapon() {
  return (
    <aside className={styles.weaponContainer}>
      <figure>
        <figcaption>
          <span className='bold'>RECOMMENDED WEAPON:</span> Icer
        </figcaption>
        <Image
          src={WeaponImg}
          alt='Silver gun with black handle grip and ice blue glowing tip, shown at a 45 degree angle.'
        />
      </figure>
    </aside>
  );
}
