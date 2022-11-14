import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/store';
import type {Node} from 'react';
import AppNavigation from './src/navigation';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
