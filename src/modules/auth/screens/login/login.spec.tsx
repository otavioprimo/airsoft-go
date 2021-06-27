import React from 'react';
import {act} from 'react-test-renderer';
import {render} from '../../../../../jest/test-utils';

import LoginScreen from './index';

import loginSlice from '../../redux/login';

afterEach(async () => {
  await act(async () => {});
});

describe('Testing Login Screen', () => {
  it('Should match snapshot', () => {
    const {toJSON} = render(<LoginScreen />, {
      state: {},
      reducer: loginSlice.reducer,
    });
    expect(toJSON()).toMatchSnapshot('LoginScreen');
  });
});
