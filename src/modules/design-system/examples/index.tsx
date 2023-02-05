import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
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
import CardExample from '../examples/CardExample';
import StatusBar from '../components/StatusBar';
import CardModalExample from '../examples/CardModalExample';

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
        <Button label="Cards" onPress={() => navigateTo('DSCards')} />
        <Button label="Card Modal" onPress={() => navigateTo('DSCardModal')} />
      </Center>
    </Container>
  );
};

const AppDesignSystem = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? DarkTheme : WhiteTheme;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar isDarkMode={isDarkMode} />

        <InitNavigator.Navigator
          initialRouteName="DesignSystem"
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.background,
            },
            headerTitleStyle: {
              color: theme.textPrimary,
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => setIsDarkMode(!isDarkMode)}>
                <Text style={{color: theme.textPrimary}}>Change Theme</Text>
              </TouchableOpacity>
            ),
          }}>
          <InitNavigator.Screen
            name="DSExamples"
            component={ExamplesScreen}
            options={{title: 'Design System'}}
          />

          <InitNavigator.Screen
            name="DSButtons"
            component={ButtonExample}
            options={{title: 'Buttons'}}
          />
          <InitNavigator.Screen
            name="DSInputs"
            component={InputExample}
            options={{title: 'Inputs'}}
          />
          <InitNavigator.Screen
            name="DSCards"
            component={CardExample}
            options={{title: 'Cards'}}
          />
          <InitNavigator.Screen
            name="DSCardModal"
            component={CardModalExample}
            options={{title: 'Card Modal'}}
          />
        </InitNavigator.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppDesignSystem;
