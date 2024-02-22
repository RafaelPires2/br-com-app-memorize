import React from 'react';
import { HomeRoutes } from './home-routes';

import { NewCardPage } from '@app/modules/new-card';
import { AccountPage } from '@app/modules/account';
import { Feather } from 'react-native-vector-icons';
import { BottomTabBar } from '@app/components/atm.bottom-tab-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ButtonTabBarPlus } from '@app/components/atm.button-tab-bar-plus';
import { TabBarText } from '@app/components/atm.bottom-tab-bar/bottom-tab-bar-styles';

const BottomTab = createBottomTabNavigator();

export const BottomTabRoutes = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }} tabBar={BottomTabBar}>
      <BottomTab.Screen
        name="homeRoutes"
        component={HomeRoutes}
        options={{
          title: 'Início',
          tabBarLabel: ({ focused, children, color }) => (
            <TabBarText color={color} isFocused={focused}>
              {children}
            </TabBarText>
          ),
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="newCard"
        component={NewCardPage}
        options={{
          title: '',
          tabBarLabel: ({ focused, children, color }) => (
            <TabBarText color={color} isFocused={focused}>
              {children}
            </TabBarText>
          ),
          tabBarIcon: () => <ButtonTabBarPlus />,
        }}
      />

      <BottomTab.Screen
        name="accountRoutes"
        component={AccountPage}
        options={{
          title: 'Conta',
          tabBarLabel: ({ focused, children, color }) => (
            <TabBarText color={color} isFocused={focused}>
              {children}
            </TabBarText>
          ),
          tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
