import React from 'react';
import FirstPage from './views/FirstPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoinDetails from "./views/CoinDetails";
import {Provider} from "react-redux";
import reducers from './reducers'
import {createStore} from "redux";
import CreateCoin from "./views/CreateCoin";

const Stack = createNativeStackNavigator();

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Coin Track" component={FirstPage} />
          <Stack.Screen name="Coin Details" component={CoinDetails} />
          <Stack.Screen name="New Coin" component={CreateCoin} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
