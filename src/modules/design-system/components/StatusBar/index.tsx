import React from 'react';
import {StatusBar as RNStatusBar, Platform} from 'react-native';
import {Container} from './style';

interface StatusBarProps {
  isDarkMode?: boolean;
}

const StatusBar: React.FC<StatusBarProps> = ({isDarkMode}) => {
  const content = () => {
    return (
      <RNStatusBar
        translucent
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000' : '#222'}
      />
    );
  };
  return Platform.select({
    ios: <Container>{content()}</Container>,
    default: content(),
  });
};

export default React.memo(StatusBar);
