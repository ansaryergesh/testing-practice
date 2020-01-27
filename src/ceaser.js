const ceaser = (str, key) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const symb = str.charCodeAt(i);
    if (str[i] === str[i].toUpperCase()) {
      result += String.fromCharCode(((symb - 65 + key) % 26) + 65);
    }
    else {
      result += String.fromCharCode(((symb - 97 + key) % 26) + 97);
    }
  }
  return result;
};

export default ceaser;