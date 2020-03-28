/* TAKEN FROM STYLED COMPONENTS */
/* https://github.com/styled-components/styled-components/blob/v3.3.3/src/utils/generateAlphabeticName.js */
const charsLength = 52;

const getAlphabeticChar = (code) => String.fromCharCode(code + (code > 25 ? 39 : 97));

export const generateAlphabeticName = (code) => {
  let name = '';
  let x;
  console.log('\r\n')
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
    console.log('x =', x, ' | ', 'Math.floor(x / charsLength) =', Math.floor(x / charsLength), ' | ', x % charsLength, ' | ', name);
  }
  return getAlphabeticChar(x % charsLength) + name;
  /* END TAKEN FROM STYLED COMPONENTS */ 
};

export const getStylesheet = () => document.querySelector('style[data-stylish]');

export const makeStylesheet = () => {
  const sheet = document.createElement('style');
  sheet.setAttribute('data-stylish', 'stylin');
  document.head.appendChild(sheet);
};