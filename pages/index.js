import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Password from '../components/Password';
import Wipeout from '../components/Wipeout';

export default function Home() {
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
    <div className={styles.container}>
      <Head>
        <title>MIB Agent Access Portal</title>
        <meta
          name='description'
          content='MIB Agents: You have 5 seconds to enter your credentials...'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='MIB Agent Portal' />
        <meta property='og:image' content='/share.jpg' />
      </Head>
      <div className={styles.stars}></div>
      <Header />
      <Password wipeout={wipeout} setWipeout={setWipeout} />
      <Wipeout wipeout={wipeout} />
    </div>
  );
}
