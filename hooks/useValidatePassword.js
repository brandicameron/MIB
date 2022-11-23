export function useValidatePassword() {
  const validatePassword = (
    input,
    setWipeout,
    setPasswordAccepted,
    setCorrectPassword,
    setIncorrectPassword
  ) => {
    const password = 'orion';

    if (input === password) {
      setCorrectPassword(true);
      setTimeout(() => {
        setPasswordAccepted(true);
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
