import React from 'react';
import { commonTheme } from '@atomic/obj.theme';
import { Feather } from 'react-native-vector-icons';
import { ButtonTabBarPlusStyle, ButtonTabBarPlusWrapperStyle } from './button-tab-bar-plus-styles';

interface ButtonTabBarPlusProps {
  onTap?: () => void;
}

const theme = commonTheme;

export const ButtonTabBarPlus = ({ onTap }: ButtonTabBarPlusProps) => {
  return (
    <ButtonTabBarPlusWrapperStyle>
      <ButtonTabBarPlusStyle onPress={() => onTap()}>
        <Feather name="plus" size={theme.iconSize.medium} color={theme.color.primaryDark} />
      </ButtonTabBarPlusStyle>
    </ButtonTabBarPlusWrapperStyle>
  );
};
