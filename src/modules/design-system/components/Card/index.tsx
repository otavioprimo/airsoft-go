import React from 'react';

import {Container} from './style';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  footerTitle: string;
  image: string;
  textFirstAction?: string;
  iconFirstAction?: IconProp;
  textSecondAction?: string;
  iconSecondAction?: IconProp;
  onPress?: () => void;
  onLongPress?: () => void;
  delayLongPress?: number;
}

export const TEST_ID_BUTTON = 'button-card';

const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  description,
  footerTitle,
  textFirstAction,
  iconFirstAction,
  textSecondAction,
  iconSecondAction,
  onPress,
  onLongPress,
  delayLongPress = 500,
}) => {
  const _onPress = () => {
    onPress && onPress();
  };

  const _onLongPress = () => {
    onLongPress && onLongPress();
  };

  return (
    <Container
      testID={TEST_ID_BUTTON}
      onPress={_onPress}
      onLongPress={_onLongPress}
      delayLongPress={delayLongPress}
    />
  );
};

export default Card;
