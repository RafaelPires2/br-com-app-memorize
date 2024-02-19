import React from 'react';
import { HomePage } from '@app/modules/home';
import { DetailCardsPage } from '@app/modules/home/detail-cards.page';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

export function HomeRoutes() {
  return (
    <HomeStack.Navigator initialRouteName="bottomTabRoutes">
      <HomeStack.Screen name="homePage" component={HomePage} options={{ headerShown: false }} />
      <HomeStack.Screen name="detailCardsPage" component={DetailCardsPage} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}
