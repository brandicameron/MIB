import styles from './Login.module.css';
import { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import PasswordInput from './PasswordInput';
import Wipeout from './Wipeout';
import Space from '../Space/Space';

export default function Login() {
  const [wipeout, setWipeout] = useState(false);

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
      <Space />
    </>
  );
}

Login.getLayout = (page) => page;
