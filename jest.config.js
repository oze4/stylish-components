/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */

// const allTests = '**/?(*.)+(spec|test).[jt]s?(x)';
const __tests__Only = '**/__tests__/__tests__/**/*.[jt]s?(x)';

module.exports = {
  testMatch: [__tests__Only /* , allTests */],
};
