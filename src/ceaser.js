const ceaser = (str, key) => {
  let result = '';
  for (var i = 0; i < str.length; i ++) {
    let b = str[i];
    let symb = str.charCodeAt(i);
    if (b === b.toUpperCase()) {
      result += String.fromCharCode(((symb - 65 + key) % 26) + 65);
    }
    else {
      result += String.fromCharCode(((symb - 97 + key) % 26) + 97);
    }
  }
  return result;
}

export default ceaser;