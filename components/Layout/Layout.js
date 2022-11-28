import styles from './Layout.module.css';
import Head from 'next/head';

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
      <div className={styles.frame}></div>
      <h1>Frame Header</h1>
      <main>{children}</main>
      <footer>Frame Footer</footer>
    </>
  );
}
