import styles from './Frame.module.css';
import Header from './Header';
import Nav from './Nav';

export default function Frame() {
  return (
    <div className={styles.frame}>
      <Nav />
      <div className={styles.frameLeft}>
        <div className={styles.borderTop}></div>
        <div className={styles.borderBottom}></div>
        <div className={styles.borderSide}></div>
      </div>
      <div className={styles.frameRight}>
        <div className={styles.borderTop}></div>
        <div className={styles.borderBottom}></div>
        <div className={styles.borderSide}></div>
      </div>
      <Header />
    </div>
  );
}
