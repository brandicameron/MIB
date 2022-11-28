import { useRouter } from 'next/router';

export function useValidatePassword() {
  const router = useRouter();

  const validatePassword = (input, setWipeout, setCorrectPassword, setIncorrectPassword) => {
    const password = 'orion';

    if (input === password) {
      setCorrectPassword(true);
      setTimeout(() => {
        router.push(`/portal`);
      }, 500);
    } else if (input.length === 5 && input !== password) {
      setIncorrectPassword(true);
      setTimeout(() => {
        setWipeout(true);
      }, 750);
    }
  };

  return { validatePassword };
}
