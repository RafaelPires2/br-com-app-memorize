import styled from 'styled-components/native';

import { BaseTheme, ThemeColors } from '@atomic/obj.theme';

export type ImageIconVariant =
  | 'primary'
  | 'alert'
  | 'success'
  | 'warning'
  | 'accessory'
  | 'accessoryOrange'
  | 'accessoryGreen'
  | 'white'
  | 'secondaryDark';

export type ImageIconSize =
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'
  | 'xxLarge'
  | 'smallGif'
  | 'mediumGif'
  | 'largeGif';

export const IconSize: (theme: BaseTheme) => Record<ImageIconSize, number> = theme => {
  return {
    xSmall: theme.iconSize.xSmall,
    small: theme.iconSize.small,
    medium: theme.iconSize.medium,
    large: theme.iconSize.large,
    xLarge: theme.iconSize.xLarge,
    xxLarge: theme.iconSize.xxLarge,
    smallGif: theme.iconSize.smallGif,
    mediumGif: theme.iconSize.mediumGif,
    largeGif: theme.iconSize.largeGif,
  };
};

const IconColor: (theme: BaseTheme) => Record<ImageIconVariant, string> = theme => {
  return {
    primary: theme.color.primary,
    alert: theme.color.alert,
    success: theme.color.success,
    warning: theme.color.warning,
    accessory: theme.color.accessory,
    accessoryOrange: theme.color.accessoryOrange,
    accessoryGreen: theme.color.accessoryGreen,
    white: theme.color.white,
    primaryXLight: theme.color.primaryXLight,
    secondaryDark: theme.color.secondaryDark,
    grayMedium: theme.color.grayMedium,
  };
};

interface ImageIconStyledProps {
  variant: ThemeColors;
  size: ImageIconSize;
  rounded?: boolean;
}

export const ImageIconStyled = styled.Image<ImageIconStyledProps>`
  width: ${({ theme, size }) => IconSize(theme)[size]}px;
  height: ${({ theme, size }) => IconSize(theme)[size]}px;
  ${({ variant, theme }) => variant && `tint-color: ${IconColor(theme)[variant]}`};
  border-radius: ${props => (props.rounded ? '50px' : 0)};
`;
