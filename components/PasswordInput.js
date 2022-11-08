import styles from './PasswordInput.module.css';
import { useState, useEffect, useRef } from 'react';

import { keys } from '../data/keys';
import { alienLetters } from '../data/alienLetters';

export default function PasswordInput({ setWipeout }) {
  const [input, setInput] = useState('');
  const [alienCharacters, setAlienCharacters] = useState([]);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const inputElement = useRef();

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const handleUserInput = (e) => {
    const userInput = e.target.value;
    setInput(userInput);
    const inputArray = userInput.split('');

    const alienCharacterArray = [];

    const alienCharacterIndexes = inputArray.map((ch) => {
      return keys.indexOf(ch);
    });

    alienCharacterIndexes.forEach((index) => {
      alienCharacterArray.push(`../images/alien-letters/${alienLetters[index]}`);
    });

    setAlienCharacters(alienCharacterArray);

    if (userInput.length === 5) {
      setIncorrectPassword(true);
      setTimeout(() => {
        setWipeout(true);
      }, 750);
    }
  };

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
          {alienCharacters.map((ch, i) => (
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
