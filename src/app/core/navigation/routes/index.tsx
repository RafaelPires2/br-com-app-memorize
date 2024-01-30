import React from 'react';
import { TabRoutes } from './tab-routes';
import { NavigationContainer } from '@react-navigation/native';

export const Routes = () => {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
};
