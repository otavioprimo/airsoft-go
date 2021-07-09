import React from 'react';
import {useColorScheme, StatusBar} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components/native';

import {DarkTheme, WhiteTheme} from '../../../theme';

import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import ButtonExample from './ButtonExample';
import Button from '../components/Button';
import Container from '../components/Container';
import InputExample from '..//examples/InputExample';

enableScreens();
const InitNavigator = createNativeStackNavigator();

const Center = styled.View`
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const ExamplesScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigateTo = (to: string) => {
    navigation.navigate(to);
  };

  return (
    <Container>
      <Center>
        <Button label="Buttons" onPress={() => navigateTo('DSButtons')} />
        <Button label="Inputs" onPress={() => navigateTo('DSInputs')} />
      </Center>
    </Container>
  );
};

const AppDesignSystem = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : WhiteTheme}>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <InitNavigator.Navigator
          initialRouteName="DesignSystem"
          screenOptions={{
            headerShown: true,
          }}>
          <InitNavigator.Screen name="DSExamples" component={ExamplesScreen} />

          <InitNavigator.Screen name="DSButtons" component={ButtonExample} />
          <InitNavigator.Screen name="DSInputs" component={InputExample} />
        </InitNavigator.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppDesignSystem;
