import React from 'react';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Main(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{title: 'First Screen'}}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{title: 'Second Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
