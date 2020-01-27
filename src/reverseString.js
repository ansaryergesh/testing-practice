const reverseString = (string) => {
  if (typeof string === 'string') {
    return string.split('').reverse().join('');
  }
  throw new Error('Only string is exptected');
};

export default reverseString;