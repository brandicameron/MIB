import SpaceLayout from '../components/SpaceLayout/SpaceLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SpaceLayout>
      <Component {...pageProps} />
    </SpaceLayout>
  );
}

export default MyApp;
