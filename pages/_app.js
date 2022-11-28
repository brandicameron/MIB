import SpaceLayout from '../components/SpaceLayout/SpaceLayout';
// import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SpaceLayout>
      <Component {...pageProps} />
    </SpaceLayout>
  );
}

export default MyApp;
