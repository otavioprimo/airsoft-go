import React from 'react';
import {render} from 'test/test-utils';
import StatusBar from './index';

describe('Design System - StatusBar', () => {
  it('Should match snapshot in light mode', () => {
    const {toJSON} = render(<StatusBar isDarkMode={false} />);
    expect(toJSON()).toMatchSnapshot('DS_StatusBar_Light');
  });

  it('Should match snapshot in dark mode', () => {
    const {toJSON} = render(<StatusBar isDarkMode />);
    expect(toJSON()).toMatchSnapshot('DS_StatusBar_Dark');
  });
});
