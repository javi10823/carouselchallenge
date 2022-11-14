import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import Login from '../screens/Login';
import {useSelector} from 'react-redux';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const isLogged = useSelector(state => state.login.isLogged);
  console.log({isLogged});
  return (
    <Stack.Navigator>
      {!isLogged && (
        <>
          <Stack.Screen
            name={Routes.LoginScreen}
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
      {isLogged && (
        <>
          <Stack.Screen
            name={Routes.HomeScreen}
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigation;
