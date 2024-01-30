import React from 'react';
import { StackRoutes } from './stack-routes';
import { AccountPage } from '../../../modules/account/account.page';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="home" component={StackRoutes} />

      <Tab.Screen name="account" component={AccountPage} />
    </Tab.Navigator>
  );
};
