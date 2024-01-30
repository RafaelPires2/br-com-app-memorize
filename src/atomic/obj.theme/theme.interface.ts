interface BaseBorder {
  radiusXSmall: string;
  radiusSmall: string;
  radiusMedium: string;
  radiusLarge: string;
  width: string;
  color: string;
}

export interface BaseColor {
  alpha: string;
  transparent: string;
  whiteTransparent: string;
  grayXDarkTransparent: string;

  primary: string;
  disabled: string;
  primaryDisabled: string;
  primaryXLight: string;
  primaryLight: string;
  primaryDark: string;

  secondary: string;
  secondaryXLight: string;
  secondaryLight: string;
  secondaryDark: string;
  secondaryXDark: string;

  background: string;
  backgroundDark: string;

  grayXXLight: string;
  grayXLight: string;
  grayLight: string;
  gray: string;
  grayMedium: string;
  grayDark: string;
  grayXDark: string;

  white: string;
  black: string;

  accessory: string;
  accessoryPurple: string;
  accessoryOrange: string;
  accessoryBlue: string;
  accessoryGreen: string;
  accessoryPink: string;

  callToAction: string;

  warningLight: string;
  warning: string;
  warningDark: string;

  successLight: string;
  success: string;
  successDark: string;

  alertLight: string;
  alert: string;
  alertDark: string;

  information: string;
  informationLight: string;
  informationDark: string;

  brandApple: string;
  brandGoogle: string;

  googleButtonText: string;
  brandFacebook: string;
}

interface BaseFontSize {
  xxSmall: string;
  xSmall: string;
  small: string;
  medium: string;
  large: string;
  xLarge: string;
}

interface BaseFontFamily {
  primary: {
    regular: string;
    medium: string;
    bold: string;
    italic: string;
    semiBold: string;
  };
  secondary: {
    medium: string;
    bold: string;
    semiBold: string;
  };
}
interface BaseLineHeight {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
}

interface BaseIconSize {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
  smallGif: number;
  mediumGif: number;
  largeGif: number;
}

interface BaseOpacity {
  active: number;
  disabled: number;
}

interface BaseSpacing {
  xxSmall: number;
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
  gutter: number;
  halfGutter: number;
  doubleGutter: number;
}

export type ThemeColors = keyof BaseColor;

interface BaseButton {
  height: number;
  smallHeight: number;
  iconSize: number;
}

export interface BaseTheme {
  theme: string;
  color: BaseColor;
  border: BaseBorder;
  button: BaseButton;
  fieldHeight: number;
  fontFamily: BaseFontFamily;
  fontSize: BaseFontSize;
  iconSize: BaseIconSize;
  opacity: BaseOpacity;
  spacing: BaseSpacing;
  lineHeight: BaseLineHeight;
}

export interface ThemeProps {
  theme?: BaseTheme;
}
