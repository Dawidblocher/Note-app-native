import React from 'react';
import { Provider } from 'react-redux';
import store from './src/tools/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBottom from './src/components/NavigationBottom/NavigationBottom';

const Stack = createStackNavigator();

  export default function App() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <NavigationBottom />
        </NavigationContainer>
      </Provider>
    );
  }