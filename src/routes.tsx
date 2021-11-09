import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'react-native';

import { COLORS } from './constants/colors';

import { HomeScreen } from './screens/home';
import { CartScreen } from './screens/cart';

import { AuthProvider } from './providers/auth';
import { CartProvider } from './providers/cart';

const Stack = createStackNavigator();

function Routes() {
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <StatusBar
            backgroundColor={COLORS.PRIMARY_DARK}
            barStyle="light-content"
          />
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Cart"
              component={CartScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
}

export default Routes;
