import styles from '../components/Login/PasswordInput.module.css';

export function useInputStyles(correctPassword) {
  const inputStyles = () => {
    let inputClass = `${styles.passwordInput}`;

    if (correctPassword === false) {
      inputClass = `${styles.passwordInput} ${styles.incorrect}`;
    }

    if (correctPassword === true) {
      inputClass = `${styles.passwordInput} ${styles.correct}`;
    }

    return inputClass;
  };

  const characterStyles = () => {
    let characterClass = `${styles.character}`;

    if (correctPassword === false) {
      characterClass = `${styles.character} ${styles.incorrect}`;
    }

    if (correctPassword === true) {
      characterClass = `${styles.character} ${styles.correct}`;
    }

    return characterClass;
  };

  return { inputStyles, characterStyles };
}
