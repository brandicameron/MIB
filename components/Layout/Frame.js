import styles from './Frame.module.css';

export default function Frame() {
  return (
    <div className={styles.frame}>
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
    </div>
  );
}
