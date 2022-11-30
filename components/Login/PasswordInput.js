import styles from './PasswordInput.module.css';
import { useState, useEffect, useRef } from 'react';
import { useInputStyles } from '../../hooks/useInputStyles';
import { useAlienCharacters } from '../../hooks/useAlienCharacters';
import { useValidatePassword } from '../../hooks/useValidatePassword';

export default function PasswordInput({ setWipeout }) {
  const [input, setInput] = useState('');
  const [alienCharacters, setAlienCharacters] = useState([]);
  const [correctPassword, setCorrectPassword] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const { inputStyles, characterStyles } = useInputStyles(incorrectPassword, correctPassword);
  const { replaceInputWithAlienChars } = useAlienCharacters();
  const { validatePassword } = useValidatePassword();
  const inputElement = useRef();

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const handleUserInput = (e) => {
    const userInput = e.target.value.toLowerCase();
    setInput(userInput);
    replaceInputWithAlienChars(userInput, setAlienCharacters);
    validatePassword(userInput, setWipeout, setCorrectPassword, setIncorrectPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <>
      <form className={styles.inputContainer} spellCheck='false' onSubmit={handleSubmit}>
        <label htmlFor='password-input'>Enter Agent Code</label>
        <input
          className={inputStyles()}
          ref={inputElement}
          onChange={handleUserInput}
          type='text'
          maxLength={5}
          value={input}
          id='password-input'
        />
        <ul className={styles.charactersContainer}>
          {alienCharacters.map((ch, index) => (
            <li key={index}>
              <img className={characterStyles()} src={ch} alt='' />
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}
