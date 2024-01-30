import { commonTheme } from './common.theme';
import { BaseTheme } from './theme.interface';

// Add here the colors used in this specific flavor
const themeColor = {
  blue: '#0092D3',
  emeraldGreen: '#6DAE9F',
  mossGreen: '#a7bc2e',
  orange: '#d88d00',
};

// Alter the values that are different for this theme like colors, assets, spacing, etc
export const regularTheme: BaseTheme = {
  ...commonTheme,
  theme: 'regular',
  color: {
    ...commonTheme.color,
    primary: themeColor.blue,
    callToAction: themeColor.mossGreen,
    secondary: themeColor.emeraldGreen,
    accessory: themeColor.orange,
  },
};
