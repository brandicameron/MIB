import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <p>Good morning Agent J</p>
      <small className={styles.status}>
        <span className='bold'>STATUS:</span> <span className='success'>Active</span>
      </small>
    </header>
  );
}
