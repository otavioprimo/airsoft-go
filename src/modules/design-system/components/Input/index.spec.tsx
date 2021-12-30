import React from 'react';
import {render, fireEvent, act} from 'test/test-utils';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

import Input, {TEST_ID_INPUT} from './index';

beforeAll(() => {
  jest.useFakeTimers();
});

describe('Design System - Input', () => {
  it('Should match snapshot', () => {
    const {toJSON} = render(<Input label="Email" />);
    expect(toJSON()).toMatchSnapshot('Input_default');
  });

  it('Should match snapshot with leftIcon', () => {
    const {toJSON} = render(<Input label="Email" leftIcon={faEnvelope} />);
    expect(toJSON()).toMatchSnapshot('Input_default');
  });

  it('Should call onChangeText while typing', async () => {
    const onChangeTextProp = jest.fn();
    const {getByTestId} = render(
      <Input label="Email" onChangeText={onChangeTextProp} />,
    );

    const value = 'fake_email@biruleibe.com';

    await act(async () => {
      const inputText = getByTestId(TEST_ID_INPUT);
      fireEvent.changeText(inputText, value);
      expect(onChangeTextProp).toBeCalledWith(expect.stringContaining(value));
    });
  });
});
