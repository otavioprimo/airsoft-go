import React from 'react';

import {ScrollView, SafeArea} from './style';

const Container: React.FC = ({children}) => {
  return (
    <SafeArea>
      <ScrollView>{children}</ScrollView>
    </SafeArea>
  );
};

export default Container;
