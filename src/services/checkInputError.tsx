const inputHasError = (value: string) => {
  const re = /[A-Za-z0-9]/g;

  return !re.test(value) || value === '';
};

export default inputHasError;
