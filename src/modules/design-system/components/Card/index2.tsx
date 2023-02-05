import React from 'react';

import {
  Container,
  BackgroundImage,
  ContainerFooter,
  ContainerInfos,
  ContainerTop,
  Title,
  Subtitle,
  Description,
  FooterTitle,
  FooterSubTitle,
  ContainerFooterInfos,
  Icon,
  ContainerIcon,
} from './style';
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
      delayLongPress={delayLongPress}>
      <BackgroundImage
        source={{
          uri: image,
        }}
      />
      <ContainerTop>
        <ContainerInfos>
          <Subtitle>{subtitle}️</Subtitle>
          <Title>{title}</Title>

          <Description>{description}</Description>
        </ContainerInfos>
        <ContainerFooter>
          <FooterTitle>{footerTitle}</FooterTitle>
          <ContainerFooterInfos>
            <ContainerIcon>
              <FooterSubTitle>{textFirstAction}</FooterSubTitle>
              {iconFirstAction && <Icon icon={iconFirstAction} />}
            </ContainerIcon>

            <ContainerIcon>
              <FooterSubTitle>{textSecondAction}</FooterSubTitle>
              {iconSecondAction && <Icon icon={iconSecondAction} />}
            </ContainerIcon>
          </ContainerFooterInfos>
        </ContainerFooter>
      </ContainerTop>
    </Container>
  );
};

export default Card;
