import { version } from '../package.json';

/* THE FOLLOWING 2 FUNCTIONS WERE TAKEN FROM STYLED COMPONENTS */
/* https://github.com/styled-components/styled-components/blob/v3.3.3/src/utils/generateAlphabeticName.js */
const charsLength = 52;

const getAlphabeticChar = (code) => {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
}

const generateAlphabeticName = (code) => {
  let name = '';
  let x;
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }
  return getAlphabeticChar(x % charsLength) + name;
  /* END TAKEN FROM STYLED COMPONENTS */ 
};

export const generateNewClassName = () => {
  const randomNumbers = Math.floor(Math.random() * 9999999999999);
  return `stylished-${generateAlphabeticName(randomNumbers)}`;
}

export const makeStylesheet = () => {
  const sheet = document.createElement('style');
  sheet.setAttribute('data-stylished', version);
  document.head.appendChild(sheet);
};

export const getStylesheet = () => {
  return document.querySelector('style[data-stylished]');
}

export const cleanStyleString = str => {
  return str.replace(/\n/g, '').replace(/\s+/g, ' ');
}

export const getMediaQueries = str => {
  return cleanStyleString(str).match(/((@media [\s]*).*?[^}]*}.*?})/g);
}
