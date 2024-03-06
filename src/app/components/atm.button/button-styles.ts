import styled, { css } from 'styled-components/native';
import { ShadowCss } from '@atomic/atm.shadow';
import { ButtonModifiers, ButtonVariants } from './button-modifiers.style';

interface ButtonTouchableStylesProps {
  variant: ButtonVariants;
  disabled: boolean;
}

export const ButtonTouchableStyles = styled.TouchableOpacity<ButtonTouchableStylesProps>`
  ${({ theme, disabled, variant }) => {
    return css`
      ${disabled ? ButtonModifiers[variant].touchableDisabled(theme) : ButtonModifiers[variant].touchable(theme)}
      height: ${theme.button.height}px;
      padding: ${theme.spacing.gutter}px;
      justify-content: center;
      align-items: center;
      border-radius: ${theme.border.radiusSmall};
      ${ShadowCss.medium}
    `;
  }}
`;

export const ButtonText = styled.Text<ButtonTouchableStylesProps>`
  ${({ theme, variant, disabled }) => css`
    text-align: center;
    ${disabled ? ButtonModifiers[variant].textDisabled(theme) : ButtonModifiers[variant].text(theme)}
    font-size: ${props => props.theme.fontSize.medium};
    font-family: ${props => props.theme.fontFamily.secondary.semiBold};
  `}
`;
