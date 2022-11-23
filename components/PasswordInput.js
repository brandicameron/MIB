import styles from './PasswordInput.module.css';
import { useState, useEffect, useRef } from 'react';
import { keys } from '../data/keys';
import { alienLetters } from '../data/alienLetters';

export default function PasswordInput({ setWipeout, setPasswordAccepted }) {
  const [input, setInput] = useState('');
  const [alienCharacters, setAlienCharacters] = useState([]);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const inputElement = useRef();

  const correctPassword = 'orion';

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const handleUserInput = (e) => {
    const userInput = e.target.value.toLowerCase();
    setInput(userInput);

    const alienCharacterArray = userInput.split('').map((ch) => {
      const characterKeyIndex = keys.indexOf(ch);
      return `../images/alien-letters/${alienLetters[characterKeyIndex]}`;
    });

    setAlienCharacters(alienCharacterArray);
  };

  useEffect(() => {
    if (input === correctPassword) {
      console.log('Correct Password!');
      setPasswordAccepted(true);
    } else if (input.length === 5 && input !== correctPassword) {
      setIncorrectPassword(true);
      let timer = setTimeout(() => {
        setWipeout(true);
      }, 750);

      return () => {
        setTimeout(timer);
      };
    }
  }, [input]);

  return (
    <>
      <form className={styles.inputContainer} spellCheck='false'>
        <label htmlFor='password'>Enter Agent Code</label>
        <input
          className={
            incorrectPassword ? `${styles.passwordInput} ${styles.incorrect}` : styles.passwordInput
          }
          ref={inputElement}
          onChange={handleUserInput}
          type='text'
          maxLength={5}
          value={input}
          id='password'
        />
        <ul className={styles.charactersContainer}>
          {alienCharacters.map((ch, index) => (
            <li key={index}>
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
