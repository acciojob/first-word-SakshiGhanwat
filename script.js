function firstWord(s) {
  // remove leading spaces
  s = s.trimStart();
  
  // find first space
  let index = s.indexOf(' ');
  
  // if no space found, return whole string
  if (index === -1) {
    return s;
  }
  
  // return substring till first space
  return s.slice(0, index);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));