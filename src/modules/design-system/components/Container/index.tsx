import React from 'react';

import {ScrollView, SafeArea} from './style';
import {ViewProps} from 'react-native';

export const TEST_ID_SAFE_AREA = 'SafeArea';
export const TEST_ID_SCROLl_VIEW = 'ScrollView';

interface ContainerProps extends ViewProps {
  children?: React.ReactNode;
  removeScrollView?: boolean;
}

const Container: React.FC<ContainerProps> = props => {
  return (
    <SafeArea {...props} testID={TEST_ID_SAFE_AREA}>
      {props.removeScrollView ? (
        props.children
      ) : (
        <ScrollView testID={TEST_ID_SCROLl_VIEW}>{props.children}</ScrollView>
      )}
    </SafeArea>
  );
};

export default Container;
