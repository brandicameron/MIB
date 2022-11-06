import styles from './PasswordInput.module.css';
import { useState, useEffect, useRef } from 'react';

export default function PasswordInput({ setWipeout }) {
  const [input, setInput] = useState('');
  const [inputChars, setInputChars] = useState([]);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const inputElement = useRef();

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const handleUserInput = (e) => {
    const char = e.target.value;
    setInput(char);
    const charArray = [];

    char.split('').map((ch) => {
      switch (ch) {
        case '0':
          charArray.push('../images/0.svg');
          break;
        case '1':
          charArray.push('../images/1.svg');
          break;
        case '2':
          charArray.push('../images/2.svg');
          break;
        case '3':
          charArray.push('../images/3.svg');
          break;
        case '4':
          charArray.push('../images/4.svg');
          break;
        case '5':
          charArray.push('../images/5.svg');
          break;
        case '6':
          charArray.push('../images/6.svg');
          break;
        case '7':
          charArray.push('../images/7.svg');
          break;
        case '8':
          charArray.push('../images/8.svg');
          break;
        case '9':
          charArray.push('../images/9.svg');
          break;
      }
    });

    setInputChars(charArray);

    if (char.length === 5) {
      setIncorrectPassword(true);
      setTimeout(() => {
        setWipeout(true);
      }, 750);
    }
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <label htmlFor='password'>Enter Agent Number</label>
        <input
          className={
            incorrectPassword ? `${styles.passwordInput} ${styles.incorrect}` : styles.passwordInput
          }
          ref={inputElement}
          onChange={handleUserInput}
          type='tel'
          maxLength={5}
          value={input}
          id='password'
        />
        <ul className={styles.charactersContainer}>
          {inputChars.map((ch, i) => (
            <li key={i}>
              <img
                className={
                  incorrectPassword ? `${styles.character} ${styles.incorrect}` : styles.character
                }
                src={ch}
                alt=''
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
