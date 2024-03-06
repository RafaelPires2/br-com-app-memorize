import { DefaultTheme } from 'styled-components/native';

export type ButtonVariants = 'primary' | 'secondary' | 'callToAction';
type ButtonInnerComponents = 'touchable' | 'text' | 'touchableDisabled' | 'textDisabled';
type StyleParser = (theme: DefaultTheme) => string;

interface ButtonModifiersProps {
  primary: Record<ButtonInnerComponents, StyleParser>;
  secondary: Record<ButtonInnerComponents, StyleParser>;
  callToAction: Record<ButtonInnerComponents, StyleParser>;
}

export const ButtonModifiers: ButtonModifiersProps = {
  primary: {
    touchable: (theme: DefaultTheme) => `background-color: ${theme.color.primary}`,
    text: (theme: DefaultTheme) => `color: ${theme.color.white}`,

    touchableDisabled: (theme: DefaultTheme) => `background-color: ${theme.color.gray}`,
    textDisabled: (theme: DefaultTheme) => `color: ${theme.color.grayMedium};`,
  },
  secondary: {
    touchable: (theme: DefaultTheme) =>
      `background-color: ${theme.color.secondaryXLight}; border-color: ${theme.color.secondaryXLight};`,
    text: (theme: DefaultTheme) => `color: ${theme.color.secondaryXDark};`,

    touchableDisabled: (theme: DefaultTheme) =>
      `background-color: ${theme.color.disabled}; border-color: ${theme.color.disabled};`,
    textDisabled: (theme: DefaultTheme) => `color: ${theme.color.grayDark};`,
  },
  callToAction: {
    touchable: (theme: DefaultTheme) =>
      `background-color: ${theme.color.secondary}; border-color: ${theme.color.secondary};`,
    text: (theme: DefaultTheme) => `color: ${theme.color.primary};`,

    touchableDisabled: (theme: DefaultTheme) =>
      `background-color: ${theme.color.secondaryXLight}; border-color: ${theme.color.secondaryXLight};`,
    textDisabled: (theme: DefaultTheme) => `color: ${theme.color.grayMedium};`,
  },
};
