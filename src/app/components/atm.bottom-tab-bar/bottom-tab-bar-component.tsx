import React from 'react';
import { commonTheme } from '@atomic/obj.theme';
import { Feather } from 'react-native-vector-icons';
import { ButtonTabBarPlus } from '@app/components/atm.button-tab-bar-plus';
import { BottomTabBarWrapper, TabBarButton, TabBarText } from './bottom-tab-bar-styles';

const theme = commonTheme;

export const BottomTabBar = ({ navigation }) => {
  return (
    <BottomTabBarWrapper>
      <TabBarButton onPress={() => navigation.navigate('home')}>
        <Feather name="home" size={theme.iconSize.medium} color={theme.color.grayMedium} />
        <TabBarText>Início</TabBarText>
      </TabBarButton>

      <ButtonTabBarPlus onTap={() => console.log('click')} />

      <TabBarButton onPress={() => navigation.navigate('account')}>
        <Feather name="user" size={theme.iconSize.medium} color={theme.color.grayMedium} />
        <TabBarText>Conta</TabBarText>
      </TabBarButton>
    </BottomTabBarWrapper>
  );
};
