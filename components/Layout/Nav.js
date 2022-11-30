import styles from './Nav.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
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
  );
}
