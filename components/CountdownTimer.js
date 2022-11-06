import styles from './CountdownTimer.module.css';
import { useState, useEffect } from 'react';

export default function CountdownTimer({ setWipeout }) {
  const [countDown, setCountDown] = useState(6);
  const [showCountDown, setShowCountDown] = useState(false);

  useEffect(() => {
    const counterTimer = setTimeout(() => {
      setShowCountDown(true);
    }, 1000);

    return () => {
      clearTimeout(counterTimer);
    };
  }, []);

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

  return (
    <p className={styles.countDown} style={{ visibility: showCountDown ? 'visible' : 'hidden' }}>
      {countDown}
    </p>
  );
}
