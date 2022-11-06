import styles from './Password.module.css';
import PasswordInput from './PasswordInput';
import CountdownTimer from './CountdownTimer';

export default function Password({ wipeout, setWipeout }) {
  return (
    !wipeout && (
      <main className={styles.main} style={{ opacity: wipeout ? 0 : 1 }}>
        <CountdownTimer setWipeout={setWipeout} />
        <PasswordInput setWipeout={setWipeout} />
      </main>
    )
  );
}
