import styles from './Frame.module.css';
import Link from 'next/link';

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
      <header className={styles.header}>
        <p>Good morning Agent J</p>
        <small className={styles.status}>
          <span className='bold'>STATUS:</span> <span className='success'>Active</span>
        </small>
      </header>
      <nav className={styles.navigation}>
        <p>CMD</p>
        <ul className={styles.nav}>
          <li>
            <Link href='/portal'>Target Overview</Link>
          </li>
          <li>
            <Link href='/portal'>Case Files</Link>
          </li>
          <li>
            <Link href='/portal'>Maps</Link>
          </li>
          <li>
            <Link href='/portal'>Supervisor</Link>
          </li>
        </ul>

        <ul className={styles.navButtons}>
          <li>
            <button>File Report</button>
          </li>
          <li>
            <button>Close Case</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
