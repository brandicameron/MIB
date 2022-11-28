import { useState } from 'react';
import Head from 'next/head';
import Login from '../components/Login/Login';
import AgentPortal from '../components/AgentPortal/AgentPortal';

export default function Home() {
  const [passwordAccepted, setPasswordAccepted] = useState(false);

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
      {!passwordAccepted && (
        <Login passwordAccepted={passwordAccepted} setPasswordAccepted={setPasswordAccepted} />
      )}
      {passwordAccepted && <AgentPortal />}
    </>
  );
}
