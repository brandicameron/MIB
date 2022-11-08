import styles from './Wipeout.module.css';
// import Image from 'next/image';

export default function Wipeout({ wipeout }) {
  // this bit of code fixes bug where png images wouldn't show
  // https://stackoverflow.com/questions/71392729/next-image-component-url-issue
  // const loaderProp = ({ src }) => {
  //   return src;
  // };

  return (
    wipeout && (
      <main className={styles.mainWipeout}>
        <img
          src='/../images/neuralyzer.png'
          alt='Neuralyzer - Prepare for Wipeout.'
          width={125}
          height={735}
          // loader={loaderProp}
        />
        <img
          className={styles.light}
          src='/../images/light-burst.png'
          alt=''
          width={300}
          height={200}
          // loader={loaderProp}
        />
      </main>
    )
  );
}
