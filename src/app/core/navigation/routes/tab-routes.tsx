import React from 'react';
import { StackRoutes } from './stack-routes';
import { NewCard } from '@app/modules/new-card';
import { AccountPage } from '@app/modules/account';
import { Feather } from 'react-native-vector-icons';
import { BottomTabBar } from '@app/components/atm.bottom-tab-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ButtonTabBarPlus } from '@app/components/atm.button-tab-bar-plus';
import { TabBarText } from '@app/components/atm.bottom-tab-bar/bottom-tab-bar-styles';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={BottomTabBar}>
      <Tab.Screen
        name="home"
        component={StackRoutes}
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

      <Tab.Screen
        name="newCard"
        component={NewCard}
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

      <Tab.Screen
        name="account"
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
    </Tab.Navigator>
  );
};
