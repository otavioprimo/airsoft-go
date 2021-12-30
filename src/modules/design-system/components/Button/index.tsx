import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {
  Link,
  Basic,
  Outline,
  LabelLink,
  LabelBasic,
  LabelOutline,
  LoadingLink,
  LoadingBasic,
  LoadingOutline,
} from './style';

type VariantValues = 'basic' | 'link' | 'outline';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  ref?: any;
  variant?: VariantValues;
  full?: boolean;
  loading?: boolean;
  onlyLoading?: boolean;
}

interface VariantComponents {
  basic: any;
  outline: any;
  link: any;
}

const buttons: VariantComponents = {
  basic: Basic,
  outline: Outline,
  link: Link,
};

const labels: VariantComponents = {
  basic: LabelBasic,
  outline: LabelOutline,
  link: LabelLink,
};

const loadings: VariantComponents = {
  basic: LoadingBasic,
  outline: LoadingOutline,
  link: LoadingLink,
};

export const TEST_ID_LOADING = 'LOADING';

const Button: React.FC<ButtonProps> = React.forwardRef(
  (props: ButtonProps, ref: any) => {
    let {variant} = props;
    if (!variant) {
      variant = 'basic';
    }

    const Component = buttons[variant];
    const LabelComponent = labels[variant];
    const LoadingComponent = loadings[variant];

    return (
      <Component {...props} full={props.full} ref={ref}>
        {props.loading && <LoadingComponent testID={TEST_ID_LOADING} />}
        {!props.onlyLoading && (
          <LabelComponent disabled={props.disabled}>
            {props.label}
          </LabelComponent>
        )}
      </Component>
    );
  },
);

export default React.memo(Button);
