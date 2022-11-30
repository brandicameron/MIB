import styles from './Wipeout.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Neuralyzer from '../../public/images/neuralyzer.png';
import Light from '../../public/images/light-burst.png';

export default function Wipeout({ wipeout }) {
  const router = useRouter();

  useEffect(() => {
    if (wipeout) {
      const timer = setTimeout(() => {
        router.push(`https://www.google.com/`);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [wipeout]);

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
