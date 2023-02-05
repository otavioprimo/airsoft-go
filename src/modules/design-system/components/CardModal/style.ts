import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import {Dimensions, StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const ContainerBackground = styled.View`
  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_HEIGHT}px;
  z-index: 1000;
  ${StyleSheet.absoluteFill};
  justify-content: center;
  align-items: center;
`;

export const Blur = styled(BlurView).attrs(props => ({
  blurType: props.theme.modalBlurType,
  blurAmount: 9,
  reducedTransparencyFallbackColor: 'white',
}))`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Container = styled(Animated.View)`
  background-color: ${({theme}) => theme.background};
  border-radius: 16px;
  margin-top: -${getStatusBarHeight() + 54}px;
`;
