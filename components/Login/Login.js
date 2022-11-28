import styles from './Login.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CountdownTimer from './CountdownTimer';
import PasswordInput from './PasswordInput';
import Wipeout from './Wipeout';

export default function Login() {
  const [wipeout, setWipeout] = useState(false);
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
    <>
      {!wipeout && (
        <main className={styles.container}>
          <img
            className={styles.logo}
            src='/../images/logo.svg'
            alt='Men in Black Logo'
            width={500}
            height={300}
          />

          <CountdownTimer setWipeout={setWipeout} />
          <PasswordInput setWipeout={setWipeout} />
        </main>
      )}
      <Wipeout wipeout={wipeout} />
    </>
  );
}

Login.getLayout = (page) => page;
