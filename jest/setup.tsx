/* eslint-disable no-undef */
import '@testing-library/jest-native/extend-expect';

require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();

jest.mock('react-native-status-bar-height', () => {
  return {
    getStatusBarHeight: () => 20,
  };
});

jest.mock('react-native-status-bar-height', () => {
  return {
    getStatusBarHeight: () => 20,
  };
});
