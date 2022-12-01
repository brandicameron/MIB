import Head from 'next/head';
import Frame from './Frame';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Agent J | MIB Agent Portal</title>
        <meta name='description' content='Welcome to the Men in Black Agent Portal Page.' />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='MIB Agent Portal' />
        <meta property='og:image' content='/share.jpg' />
      </Head>
      <>{children}</>
      <Frame />
    </>
  );
}
