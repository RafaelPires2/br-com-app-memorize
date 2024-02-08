import React from 'react';
import { StackRoutes } from './stack-routes';
import { AccountPage } from '@app/modules/account';
import { BottomTabBar } from '@app/components/atm.bottom-tab-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={BottomTabBar}>
      <Tab.Screen name="home" component={StackRoutes} />

      <Tab.Screen name="account" component={AccountPage} />
    </Tab.Navigator>
  );
};
