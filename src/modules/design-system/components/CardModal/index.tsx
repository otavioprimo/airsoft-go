/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore
import React, {
  ForwardedRef,
  forwardRef,
  ForwardRefRenderFunction,
  RefObject,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {Dimensions} from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  cancelAnimation,
} from 'react-native-reanimated';

import {ContainerBackground, Blur, Container} from './style';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const ANIMATION_DURATION = 100;
const DISMISS_DELAY = 250;

const INITIAL_WIDHT = 150;
const INITIAL_HEIGHT = 150;
const INITIAL_OPACITY = 0;

const FINAL_WIDTH = SCREEN_WIDTH - 16;
const FINAL_HEIGHT = 300;
const FINAL_OPACITY = 1;

interface CardModalProps {
  onDismiss?: () => void;
}

export interface CardModalRefProps {
  show: (content: any) => void;
  hide: () => void;
}

const CardModal: ForwardRefRenderFunction<unknown, CardModalProps> = (
  {},
  modalRef: ForwardedRef<CardModalRefProps>,
) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [containerVisible, setContainerVisible] = useState(false);

  const width = useSharedValue(INITIAL_WIDHT);
  const height = useSharedValue(INITIAL_HEIGHT);
  const opacity = useSharedValue(INITIAL_OPACITY);

  const animatedContainerStyles = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: ANIMATION_DURATION,
        easing: Easing.out(Easing.linear),
      }),
      height: withTiming(height.value, {
        duration: ANIMATION_DURATION,
        easing: Easing.out(Easing.linear),
      }),
      opacity: withTiming(opacity.value, {
        duration: DISMISS_DELAY,
        easing: Easing.out(Easing.linear),
      }),
    };
  });

  const _showModal = useCallback(() => {
    width.value = FINAL_WIDTH;
    height.value = FINAL_HEIGHT;
    opacity.value = FINAL_OPACITY;
  }, [height, opacity, width]);

  const _hideModal = useCallback(() => {
    cancelAnimation(width);
    cancelAnimation(height);
    cancelAnimation(opacity);

    width.value = INITIAL_WIDHT;
    height.value = INITIAL_HEIGHT;
    opacity.value = INITIAL_OPACITY;
  }, [height, opacity, width]);

  useEffect(() => {
    modalVisible ? _showModal() : _hideModal();
  }, [_hideModal, _showModal, modalVisible]);

  useImperativeHandle(modalRef, () => ({
    show(content: any) {
      setContainerVisible(true);
      setTimeout(() => {
        setModalVisible(true);
      }, 50);
    },
    hide() {
      setModalVisible(false);
      setTimeout(() => {
        setContainerVisible(false);
      }, DISMISS_DELAY);
    },
  }));

  if (containerVisible) {
    return (
      <ContainerBackground>
        <Blur />
        <Container style={[animatedContainerStyles]} />
      </ContainerBackground>
    );
  } else {
    return null;
  }
};

export default forwardRef(CardModal);
