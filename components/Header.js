import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img
        className={styles.logo}
        src='/../images/logo.svg'
        alt='Men in Black Logo'
        width={500}
        height={300}
      />
    </header>
  );
}
