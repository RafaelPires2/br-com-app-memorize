import { commonTheme } from './common.theme';
import { BaseTheme } from './theme.interface';

// Add here the colors used in this specific flavor
const themeColor = {
  marsala: '#931a3c',
  brightRed: '#fc3d5a',
  turquoise: '#4FA5C5',
  red: '#DA4453',
};

// Alter the values that are different for this theme like colors, assets, spacing, etc
export const alternativeTheme: BaseTheme = {
  ...commonTheme,
  theme: 'alternative',
  color: {
    ...commonTheme.color,
    primary: themeColor.marsala,
    callToAction: themeColor.turquoise,
    secondary: themeColor.brightRed,
    accessory: themeColor.red,
  },
};
