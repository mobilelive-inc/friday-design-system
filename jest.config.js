const path = require('path')
const here = (...p) => path.join(__dirname, ...p);
module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    // eslint-disable-next-line max-len
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/src/__mock__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 60,
      functions: 80,
      lines: 80
    }
  },
  roots: ['./src'],
  setupFilesAfterEnv: [here('./setupTests.js')],
};