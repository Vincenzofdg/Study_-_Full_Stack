/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './tests',
  setupFilesAfterEnv: ['./setup.js'],
  testSequencer: './testSequencer.js',
};
