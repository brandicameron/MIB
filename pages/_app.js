import '../styles/globals.css';
import Space from '../components/Space/Space';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Space />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
