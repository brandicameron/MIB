import styles from './Wipeout.module.css';
import Image from 'next/image';
import Neuralyzer from '../../public/images/neuralyzer.png';
import Light from '../../public/images/light-burst.png';

export default function Wipeout({ wipeout }) {
  return (
    wipeout && (
      <main className={styles.mainWipeout}>
        <div className={styles.neuralyzerContainer}>
          <Image
            className={styles.neuralyzer}
            src={Neuralyzer}
            alt='Neuralyzer - Prepare for Wipeout.'
          />
          <Image className={styles.light} src={Light} alt='' width={300} height={200} />
        </div>
      </main>
    )
  );
}
