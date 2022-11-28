import styles from './SpaceLayout.module.css';
import { useState, useEffect } from 'react';

export default function SpaceLayout({ children }) {
  const [stars, setStars] = useState([]);

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    let tempArray = [];
    for (let i = 0; i < getRandomNumber(100, 200); i++) {
      tempArray.push(i);
    }
    setStars(tempArray);
  }, []);

  return (
    <>
      <div className={styles.sky}>
        {stars.map((index) => (
          <div
            key={index}
            className={styles.star}
            style={{
              width: `${getRandomNumber(1, 3)}px`,
              left: `${getRandomNumber(0, 100)}vw`,
              top: `${getRandomNumber(0, 100)}%`,
              animationDelay: `-${getRandomNumber(1, 100)}00ms`,
            }}
          ></div>
        ))}
      </div>
      {children}
    </>
  );
}
