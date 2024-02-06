// Navbar icons
import { BaseColor, BaseTheme } from './theme.interface';

// Add and change the colors used in all the flavors of the project here
const commonColors = {
  primary: {
    xLight: '#757F8A',
    light: '#3A3C3E',
    medium: '#181A1C',
    dark: '#0C0D0E',
  },
  secondary: {
    xLight: '#D6F5F5',
    light: '#85E0E0',
    medium: '#43D0D0',
    dark: '#29A3A3',
    xDark: '#103D3D',
  },

  callToAction: {
    medium: '#43D0D0',
  },
  accessory: {
    purple: '#F6E3FF',
    orange: '#FFCE95',
    blue: '#AACED5',
    green: '#C3E09C',
    pink: '#FFBEF9 ',
  },

  grayScale: {
    xxLight: '#FFFFFF',
    xLight: '#FAFAFA',
    light: '#F2F2F2',
    gray: '#BFBEC1',
    medium: '#717075',
    dark: '#2A333B',
    xDark: '#181A1C',
  },

  brand: {
    apple: '#000000',
    google: '#f2f2f2',
    facebook: '#1877F2',
  },

  googleButtonText: '#1f1f1f',
};

const messageColors = {
  success: {
    light: '#DAF1E3',
    medium: '#37955B',
    dark: '#153822',
  },

  warning: {
    light: '#FEF3CD',
    medium: '#C99D03',
    dark: '#4B3B01',
  },

  alert: {
    light: '#F8D2D6',
    medium: '#B21A2A',
    dark: '#430A10',
  },
  information: {
    light: '#FEEDB4',
    medium: '#FCD343',
    dark: '#65541B',
  },
};

const color: BaseColor = {
  ...commonColors,

  alpha: '4D', // 30%
  transparent: 'transparent',
  whiteTransparent: commonColors.grayScale.xxLight + 'a0',
  grayXDarkTransparent: commonColors.grayScale.xDark + 'a0',

  primaryXLight: commonColors.primary.xLight,
  primaryLight: commonColors.primary.light,
  primary: commonColors.primary.medium,
  primaryDark: commonColors.primary.dark,

  secondary: commonColors.secondary.medium,
  secondaryXLight: commonColors.secondary.xLight,
  secondaryLight: commonColors.secondary.light,
  secondaryDark: commonColors.secondary.dark,
  secondaryXDark: commonColors.secondary.xDark,

  primaryDisabled: commonColors.grayScale.xDark,
  disabled: commonColors.grayScale.gray,

  background: commonColors.grayScale.xLight,
  backgroundDark: commonColors.primary.medium,

  grayXXLight: commonColors.grayScale.xxLight,
  grayXLight: commonColors.grayScale.xLight,
  grayLight: commonColors.grayScale.light,
  gray: commonColors.grayScale.gray,
  grayMedium: commonColors.grayScale.medium,
  grayDark: commonColors.grayScale.dark,
  grayXDark: commonColors.grayScale.xDark,

  white: commonColors.grayScale.xxLight,
  black: commonColors.grayScale.xDark,

  accessory: commonColors.accessory.orange,
  accessoryPurple: commonColors.accessory.purple,
  accessoryOrange: commonColors.accessory.orange,
  accessoryBlue: commonColors.accessory.blue,
  accessoryGreen: commonColors.accessory.green,
  accessoryPink: commonColors.accessory.pink,

  callToAction: commonColors.callToAction.medium,

  warningLight: messageColors.warning.light,
  warning: messageColors.warning.medium,
  warningDark: messageColors.warning.dark,

  successLight: messageColors.success.light,
  success: messageColors.success.medium,
  successDark: messageColors.success.dark,

  alertLight: messageColors.alert.light,
  alert: messageColors.alert.medium,
  alertDark: messageColors.alert.dark,

  information: messageColors.information.medium,
  informationDark: messageColors.information.dark,
  informationLight: messageColors.information.light,

  brandApple: commonColors.brand.apple,
  brandGoogle: commonColors.brand.google,
  brandFacebook: commonColors.brand.facebook,

  googleButtonText: commonColors.googleButtonText,
};

// Change the values here to the ones most frequently used in your project
export const commonTheme: BaseTheme = {
  theme: 'common',
  border: {
    radiusXSmall: '4px',
    radiusSmall: '6px',
    radiusMedium: '12px',
    radiusLarge: '16px',
    width: '1px',
    color: commonColors.grayScale.gray,
  },
  color,
  button: {
    height: 56,
    smallHeight: 44,
    iconSize: 20,
  },
  fieldHeight: 50,
  fontFamily: {
    primary: {
      bold: 'IBMPlexSans-Bold',
      semiBold: 'IBMPlexSans-SemiBold',
      medium: 'IBMPlexSans-Medium',
      regular: 'IBMPlexSans-Regular',
      italic: 'IBMPlexSans-Italic',
    },
    secondary: {
      bold: 'IBMPlexSansCondensed-Bold',
      semiBold: 'IBMPlexSansCondensed-SemiBold',
      medium: 'IBMPlexSansCondensed-Medium',
    },
  },
  fontSize: {
    xxSmall: '12px',
    xSmall: '14px',
    small: '16px',
    medium: '18px',
    large: '20px',
    xLarge: '28px',
  },
  lineHeight: {
    xSmall: 16,
    small: 20,
    medium: 24,
    large: 28,
    xLarge: 36,
  },
  iconSize: {
    xSmall: 16,
    small: 24,
    medium: 30,
    large: 40,
    xLarge: 80,
    xxLarge: 100,
    smallGif: 100,
    mediumGif: 150,
    largeGif: 250,
  },
  opacity: {
    active: 0.6,
    disabled: 0.5,
  },
  spacing: {
    xxSmall: 2,
    xSmall: 4,
    small: 8,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
    gutter: 16,
    halfGutter: 8,
    doubleGutter: 32,
  },
};
