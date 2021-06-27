import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import AuthNavigation from '../../auth/navigation';
import {StatusBar} from 'react-native';

enableScreens();
const InitNavigator = createNativeStackNavigator();

const CoreNavigation: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <InitNavigator.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: false,
        }}>
        <InitNavigator.Screen name="Auth" component={AuthNavigation} />
      </InitNavigator.Navigator>
    </>
  );
};

export default CoreNavigation;
