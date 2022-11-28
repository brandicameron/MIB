import Head from 'next/head';
import Login from '../components/Login/Login';

export default function Home() {
  return (
    <>
      <Head>
        <title>Login | MIB Agent Access Portal</title>
        <meta
          name='description'
          content='MIB Agents: You have 5 seconds to enter your credentials...'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='MIB Agent Portal' />
        <meta property='og:image' content='/share.jpg' />
      </Head>
      <Login />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return page;
};
