import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import LoginScreen from '../screens/login';

const Stack = createNativeStackNavigator();

const AuthNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
