import React from 'react';
import {render, act, fireEvent} from 'test/test-utils';
import {faRoute, faUsers} from '@fortawesome/free-solid-svg-icons';

import Card, {TEST_ID_BUTTON} from './index';

describe('Design System - Card', () => {
  it('Should match snapshot', () => {
    const {toJSON} = render(
      <Card
        image="https://algumacoisa.com.br/sasad.jpg"
        title="Warriors Airsoft"
        subtitle="14/06/2021"
        description={'Description 1234'}
        footerTitle="Sorocaba - SP"
        textFirstAction="250"
        iconFirstAction={faUsers}
        textSecondAction="40,4 KM"
        iconSecondAction={faRoute}
      />,
    );
    expect(toJSON()).toMatchSnapshot('DS_Card');
  });

  it('Should call onPress when click', async () => {
    const onPressProp = jest.fn();
    const {getByTestId} = render(
      <Card
        image="https://algumacoisa.com.br/sasad.jpg"
        title="Warriors Airsoft"
        subtitle="14/06/2021"
        description={'Description 1234'}
        footerTitle="Sorocaba - SP"
        textFirstAction="250"
        iconFirstAction={faUsers}
        textSecondAction="40,4 KM"
        iconSecondAction={faRoute}
        onPress={onPressProp}
      />,
    );

    await act(async () => {
      const button = getByTestId(TEST_ID_BUTTON);
      fireEvent.press(button);
      expect(onPressProp).toBeCalledTimes(1);
    });
  });

  it('Should call onLongPress when click', async () => {
    const onLongPress = jest.fn();
    const {getByTestId} = render(
      <Card
        image="https://algumacoisa.com.br/sasad.jpg"
        title="Warriors Airsoft"
        subtitle="14/06/2021"
        description={'Description 1234'}
        footerTitle="Sorocaba - SP"
        textFirstAction="250"
        iconFirstAction={faUsers}
        textSecondAction="40,4 KM"
        iconSecondAction={faRoute}
        onLongPress={onLongPress}
      />,
    );

    await act(async () => {
      const button = getByTestId(TEST_ID_BUTTON);
      fireEvent(button, 'onLongPress');
      expect(onLongPress).toBeCalledTimes(1);
    });
  });
});
