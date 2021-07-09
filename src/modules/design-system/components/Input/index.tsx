import React, {useState, useEffect} from 'react';
import {
  ContainerInput,
  ContainerIcon,
  Icon,
  InputText,
  ContainerText,
  Label,
} from './style';
import {TextInputProps} from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

interface InputProps extends TextInputProps {
  leftIcon?: any;
  label: string;
  ref?: any;
}

const TEST_ID_RIGHT_ICON = 'right_icon';
const TEST_ID_INPUT = 'input';

const Input: React.FC<InputProps> = React.forwardRef(
  (props: InputProps, ref: any) => {
    const LABEL_TRANSLATE_Y_FOCUSED = -10;
    const LABEL_TRANSLATE_Y_FOCUSED_OUT = 10;

    const LABEL_TRANSLATE_X_FOCUSED = props.leftIcon ? -30 : 0;
    const LABEL_TRANSLATE_X_FOCUSED_OUT = 0;

    const LABEl_FONT_SIZE_FOCUSED = 10;
    const LABEl_FONT_SIZE_FOCUSED_OUT = 14;

    const [focused, setFocused] = useState(false);
    const [typed, setTyped] = useState(false);

    const labelTranslateX = useSharedValue(LABEL_TRANSLATE_X_FOCUSED_OUT);
    const labelTranslateY = useSharedValue(LABEL_TRANSLATE_Y_FOCUSED_OUT);
    const labelFontSize = useSharedValue(LABEl_FONT_SIZE_FOCUSED_OUT);

    const animatedTranslateStyles = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: withTiming(labelTranslateY.value, {
              duration: 150,
              easing: Easing.out(Easing.linear),
            }),
          },
          {
            translateX: withTiming(labelTranslateX.value, {
              duration: 150,
              easing: Easing.out(Easing.linear),
            }),
          },
        ],
      };
    });

    const animatedFontStyle = useAnimatedStyle(() => {
      return {
        fontSize: withTiming(labelFontSize.value, {
          duration: 150,
          easing: Easing.out(Easing.linear),
        }),
      };
    });

    useEffect(() => {
      const startAnimation = typed || focused;
      labelTranslateX.value = startAnimation
        ? LABEL_TRANSLATE_X_FOCUSED
        : LABEL_TRANSLATE_X_FOCUSED_OUT;

      labelTranslateY.value = startAnimation
        ? LABEL_TRANSLATE_Y_FOCUSED
        : LABEL_TRANSLATE_Y_FOCUSED_OUT;

      labelFontSize.value = startAnimation
        ? LABEl_FONT_SIZE_FOCUSED
        : LABEl_FONT_SIZE_FOCUSED_OUT;
    }, [focused, typed]);

    return (
      <ContainerInput>
        {props.leftIcon && (
          <ContainerIcon testID={TEST_ID_RIGHT_ICON}>
            <Icon icon={props.leftIcon} />
          </ContainerIcon>
        )}
        <ContainerText>
          {props.label && (
            <Label style={[animatedTranslateStyles, animatedFontStyle]}>
              {props.label}
            </Label>
          )}

          <InputText
            testID={TEST_ID_INPUT}
            {...props}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChangeText={text => {
              setTyped(Boolean(text));
              if (props.onChangeText) {
                props.onChangeText(text);
              }
            }}
            underlineColorAndroid="transparent"
            ref={ref}
          />
        </ContainerText>
      </ContainerInput>
    );
  },
);

export default Input;
