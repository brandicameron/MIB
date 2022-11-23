import styles from '../components/Login/PasswordInput.module.css';

export function useInputStyles(incorrectPassword, correctPassword) {
  const inputStyles = () => {
    let inputClass = `${styles.passwordInput}`;

    if (incorrectPassword) {
      inputClass = `${styles.passwordInput} ${styles.incorrect}`;
    }

    if (correctPassword) {
      inputClass = `${styles.passwordInput} ${styles.correct}`;
    }

    return inputClass;
  };

  const characterStyles = () => {
    let characterClass = `${styles.character}`;

    if (incorrectPassword) {
      characterClass = `${styles.character} ${styles.incorrect}`;
    }

    if (correctPassword) {
      characterClass = `${styles.character} ${styles.correct}`;
    }

    return characterClass;
  };

  return { inputStyles, characterStyles };
}
