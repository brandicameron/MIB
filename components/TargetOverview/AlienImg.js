import styles from './AlienImg.module.css';
import Image from 'next/image';

export default function AlienImg({ alienImg }) {
  return (
    <div className={styles.imageBorder}>
      <Image
        className={styles.image}
        src={alienImg}
        priority='true'
        alt='Commander Aldoosi, a color changing alien that is short with extra large round eyes, and horns running down the center of his head.'
      />
    </div>
  );
}
