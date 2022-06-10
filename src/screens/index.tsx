import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from './SplashScreen';
import {CardsScreen} from './CardsScreen';

export type StackParamList = {
  SplashScreen: undefined;
  CardsScreen: undefined;
};

const Stack = createNativeStackNavigator();
export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="CardsScreen"
          component={CardsScreen}
          options={{
            animation: 'fade',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
