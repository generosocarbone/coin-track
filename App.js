import React from 'react';
import FirstPage from './views/FirstPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoinDetails from "./views/CoinDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Coin Track" component={FirstPage} />
        <Stack.Screen name="Coin Details" component={CoinDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
