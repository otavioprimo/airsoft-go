import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

import {WhiteTheme, DarkTheme} from './theme';
import {navigationRef} from './utils/root-navigation';
import CoreNavigation from './modules/core/navigation';
import {Store, persistor} from './modules/core/configs/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const renderApp = () => {
    return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={isDarkMode ? DarkTheme : WhiteTheme}>
            <NavigationContainer ref={navigationRef}>
              <CoreNavigation />
            </NavigationContainer>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  };

  return renderApp();
};

export default App;
