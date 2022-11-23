import { keys } from '../data/keys';
import { alienLetters } from '../data/alienLetters';

export function useAlienCharacters() {
  const replaceInputWithAlienChars = (userInput, setAlienCharacters) => {
    const alienCharacterArray = userInput.split('').map((ch) => {
      const characterKeyIndex = keys.indexOf(ch);
      return `../images/alien-letters/${alienLetters[characterKeyIndex]}`;
    });

    setAlienCharacters(alienCharacterArray);
  };

  return { replaceInputWithAlienChars };
}
