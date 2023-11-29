/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/** @type {import('jest').Config} */
const config = {
  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/tests/**/*.test.[jt]s"
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  // Set the test environment
  testEnvironment: 'jsdom',
};

module.exports = config;
