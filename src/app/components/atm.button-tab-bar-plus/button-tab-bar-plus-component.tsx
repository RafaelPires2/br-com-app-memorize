import React from 'react';
import { commonTheme } from '@atomic/obj.theme';
import { Feather } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '@app/core/navigation/routes/navigation-types';
import { ButtonTabBarPlusStyle, ButtonTabBarPlusWrapperStyle } from './button-tab-bar-plus-styles';

const theme = commonTheme;

export const ButtonTabBarPlus = () => {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <ButtonTabBarPlusWrapperStyle>
      <ButtonTabBarPlusStyle onPress={() => navigation.navigate('newCard')}>
        <Feather name="plus" size={theme.iconSize.medium} color={theme.color.primaryDark} />
      </ButtonTabBarPlusStyle>
    </ButtonTabBarPlusWrapperStyle>
  );
};
