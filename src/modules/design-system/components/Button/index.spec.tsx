import React from 'react';
import {act} from 'react-test-renderer';
import {render} from 'test/test-utils';

import Button from './index';

afterEach(async () => {
  await act(async () => {});
});

describe('Design System - Button', () => {
  it('Should match snapshot - default', () => {
    const {toJSON} = render(<Button label="Sign-up" />);
    expect(toJSON()).toMatchSnapshot('Button_default');
  });

  it('Should match snapshot - basic', () => {
    const {toJSON} = render(<Button label="Sign-up" variant="basic" />);
    expect(toJSON()).toMatchSnapshot('Button_basic');
  });

  it('Should match snapshot - outline', () => {
    const {toJSON} = render(<Button label="Sign-up" variant="outline" />);
    expect(toJSON()).toMatchSnapshot('Button_outline');
  });

  it('Should match snapshot - link', () => {
    const {toJSON} = render(<Button label="Sign-up" variant="link" />);
    expect(toJSON()).toMatchSnapshot('Button_link');
  });
});
