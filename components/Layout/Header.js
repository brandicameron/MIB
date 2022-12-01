import styles from './Header.module.css';
import { useState, useEffect } from 'react';

export default function Header() {
  const [greeting, setGreeting] = useState('Hello');

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour > 0 && hour < 12) {
      setGreeting('Good morning');
    }
    if (hour >= 12 && hour < 17) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  return (
    <header className={styles.header}>
      <p>{greeting}, Agent J</p>
      <small className={styles.status}>
        <span className='bold'>STATUS:</span> <span className='success'>Active</span>
      </small>
    </header>
  );
}
