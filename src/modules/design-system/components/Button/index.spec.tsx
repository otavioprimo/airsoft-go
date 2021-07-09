import React from 'react';
import {act} from 'react-test-renderer';
import {render} from 'test/test-utils';

import Button, {TEST_ID_LOADING} from './index';

afterEach(async () => {
  await act(async () => {});
});

describe('Design System - Button', () => {
  it('Should match snapshot - default', () => {
    const {toJSON} = render(<Button label="Sign-up" />);
    expect(toJSON()).toMatchSnapshot('Button_default');
  });

  it('Should match snapshot - basic', () => {
    const {toJSON} = render(<Button label="" variant="basic" />);
    expect(toJSON()).toMatchSnapshot('Button_basic');
  });

  it('Should match snapshot - outline', () => {
    const {toJSON} = render(<Button label="" variant="outline" />);
    expect(toJSON()).toMatchSnapshot('Button_outline');
  });

  it('Should match snapshot - link', () => {
    const {toJSON} = render(<Button label="" variant="link" />);
    expect(toJSON()).toMatchSnapshot('Button_link');
  });

  it('Should render label correctly', () => {
    const label = 'Sign-up';
    const {getByText} = render(<Button label={label} />);
    expect(getByText(label)).toBeDefined();
  });

  it('Should not render loading', () => {
    const {queryByTestId} = render(<Button label="" />);
    expect(queryByTestId(TEST_ID_LOADING)).toBeNull();
  });

  it('Should render loading correctly', () => {
    const {queryByTestId} = render(<Button label="" loading />);
    expect(queryByTestId(TEST_ID_LOADING)).toBeDefined();
  });

  it('Should render loading and label correctly', () => {
    const label = 'Sign-up';
    const {queryByTestId, queryByText} = render(
      <Button label={label} loading />,
    );
    expect(queryByTestId(TEST_ID_LOADING)).toBeDefined();
    expect(queryByText(label)).toBeDefined();
  });

  it('Should render only loading', () => {
    const label = 'Sign-up';
    const {queryByTestId, queryByText} = render(
      <Button label={label} loading onlyLoading />,
    );
    expect(queryByTestId(TEST_ID_LOADING)).toBeDefined();
    expect(queryByText(label)).toBeNull();
  });
});
