module.exports = {
  preset: 'react-native',
  maxWorkers: 1,
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**'],
  coveragePathIgnorePatterns: [
    '.*__snapshots__/.*',
    'style.ts',
    './src/modules/core/*',
    'App.tsx',
  ],
  coverageReporters: ['text-summary', 'lcov'],
  testPathIgnorePatterns: ['__tests__/data/', '__tests__/helpers/'],
  transformIgnorePatterns: [
    'node_modules/(?!(' +
      '@react-native|' +
      'react-native|' +
      'react-native-iphone-x-helper|' +
      '@react-navigation|' +
      'react-native-reanimated|' +
      '@fortawesome/react-native-fontawesome|' +
      '/.*)/)',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/jest/mockSvg.ts',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^#/(.*)$': '<rootDir>/src/modules/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.tsx'],
  moduleDirectories: ['node_modules', './src/jest'],
};
