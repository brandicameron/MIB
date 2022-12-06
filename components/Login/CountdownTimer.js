import styles from './CountdownTimer.module.css';
import { useState, useEffect } from 'react';

export default function CountdownTimer({ setWipeout }) {
  const [countDown, setCountDown] = useState(5000);

  useEffect(() => {
    // setting if statements to -1 allows counter to go to zero
    const timer = setTimeout(() => {
      if (countDown > -1) {
        setCountDown(countDown - 1);
      }
    }, 1000);

    if (countDown === -1) {
      setWipeout(true);
    }

    return () => {
      if (countDown === 0) {
        clearTimeout(timer);
      }
    };
  }, [countDown]);

  return <p className={styles.countDown}>{countDown}</p>;
}
