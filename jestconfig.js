module.exports = {
    collectCoverageFrom: [
      'packages/**/src/*.js',
      'packages/**/src/*.jsx',
    ],
    setupFiles: [
      'raf/polyfill',
      './jestsetup.js',
    ],
    testMatch: [
      '**/jest/**/(*.)(spec|test).js?(x)',
    ],
    roots: [process.cwd()],
    snapshotSerializers: [
      './node_modules/enzyme-to-json/serializer',
    ],
    moduleNameMapper: {
      '\\.(svg|jpg|png|md)$': '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
    testURL: 'http://localhost',
  };