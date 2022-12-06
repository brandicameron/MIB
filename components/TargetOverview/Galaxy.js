import styles from './WeaponGalaxy.module.css';

export default function Galaxy() {
  return (
    <aside className={styles.galaxyContainer}>
      <figure>
        <figcaption>
          <span className='bold'>HOME GALAXY:</span> Markarian 231
        </figcaption>
        <video
          src='./images/galaxy.mp4'
          autoPlay
          muted
          playsInline
          loop
          width={337}
          height={190}
        ></video>
      </figure>
    </aside>
  );
}
