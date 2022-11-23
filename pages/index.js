import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Login from '../components/Login';
import Wipeout from '../components/Wipeout';
import Space from '../components/Space';

export default function Home() {
  const [wipeout, setWipeout] = useState(false);
  const [passwordAccepted, setPasswordAccepted] = useState(false);
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
      <Space passwordAccepted={passwordAccepted} />
      {!passwordAccepted && <Header />}
      {!passwordAccepted && (
        <Login
          wipeout={wipeout}
          setWipeout={setWipeout}
          setPasswordAccepted={setPasswordAccepted}
        />
      )}
      <Wipeout wipeout={wipeout} />
    </>
  );
}
