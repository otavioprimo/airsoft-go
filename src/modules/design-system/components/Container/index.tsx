import React from 'react';

import {ScrollView, SafeArea} from './style';

export const TEST_ID_SAFE_AREA = 'SafeArea';
export const TEST_ID_SCROLl_VIEW = 'ScrollView';

const Container: React.FC = ({children}) => {
  return (
    <SafeArea testID={TEST_ID_SAFE_AREA}>
      <ScrollView testID={TEST_ID_SCROLl_VIEW}>{children}</ScrollView>
    </SafeArea>
  );
};

export default Container;
