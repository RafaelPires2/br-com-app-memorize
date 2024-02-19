import React from 'react';
import { BottomTabRoutes } from './bottom-tab-routes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewCardPage } from '@app/modules/new-card';

const AppStack = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="bottomTabRoutes">
        <AppStack.Screen name="newCard" component={NewCardPage} options={{ animation: 'none', headerShown: false }} />

        <AppStack.Screen
          name="bottomTabRoutes"
          component={BottomTabRoutes}
          options={{
            headerShown: false,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
