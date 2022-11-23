import styles from './Login.module.css';
import PasswordInput from './PasswordInput';
import CountdownTimer from './CountdownTimer';

export default function Login({ wipeout, setWipeout, setPasswordAccepted }) {
  return (
    !wipeout && (
      <main className={styles.main}>
        <CountdownTimer setWipeout={setWipeout} />
        <PasswordInput setWipeout={setWipeout} setPasswordAccepted={setPasswordAccepted} />
      </main>
    )
  );
}
