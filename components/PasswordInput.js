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
        case 'a':
        case 'b':
        case 'c':
          charArray.push('../images/0.svg');
          break;
        case '1':
        case 'd':
        case 'e':
        case 'f':
          charArray.push('../images/1.svg');
          break;
        case '2':
        case 'g':
        case 'h':
        case 'i':
          charArray.push('../images/2.svg');
          break;
        case '3':
        case 'j':
        case 'k':
        case 'l':
          charArray.push('../images/3.svg');
          break;
        case '4':
        case 'm':
        case 'n':
        case 'o':
          charArray.push('../images/4.svg');
          break;
        case '5':
        case 'p':
        case 'q':
        case 'r':
          charArray.push('../images/5.svg');
          break;
        case '6':
        case 's':
        case 't':
        case 'u':
          charArray.push('../images/6.svg');
          break;
        case '7':
        case 'v':
          charArray.push('../images/7.svg');
          break;
        case '8':
        case 'w':
        case 'x':
          charArray.push('../images/8.svg');
          break;
        case '9':
        case 'y':
        case 'z':
          charArray.push('../images/9.svg');
          break;
        default:
          charArray.push('../images/9.svg');
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
      <form className={styles.inputContainer} spellCheck='false'>
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
      </form>
    </>
  );
}
