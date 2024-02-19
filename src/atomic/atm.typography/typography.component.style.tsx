import styled, { css } from 'styled-components/native';

import { TextProps, TextColor } from './text-variant.component';

interface TitleProps {
  mb?: boolean;
  center?: boolean;
  noMargin?: boolean;
  color?:
    | 'white'
    | 'black'
    | 'grayDark'
    | 'callToAction'
    | 'grayMedium'
    | 'accessoryOrange'
    | 'accessoryGreen'
    | 'secondary'
    | 'success';
}

export const HDisplay = styled.Text`
  color: ${props => props.theme.color.black};
  font-size: ${props => props.theme.fontSize.xLarge};
  font-family: ${props => props.theme.fontFamily.secondary.semiBold};
  line-height: ${props => props.theme.lineHeight.xLarge}px;
`;

export const H1 = styled.Text.attrs({
  accessibilityRole: 'header',
})<TitleProps>`
  color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black)};
  font-size: ${props => props.theme.fontSize.xLarge};
  margin-bottom: ${props => (props.noMargin ? 0 : props.theme.spacing.small)}px;
  margin-top: ${props => (props.noMargin ? 0 : props.theme.spacing.small)}px;
  line-height: ${props => props.theme.lineHeight.xLarge}px;
  font-family: ${props => props.theme.fontFamily.secondary.semiBold};
  ${props => props.center && 'text-align: center;'}
`;

export const H2 = styled.Text.attrs({
  accessibilityRole: 'header',
})<TitleProps>`
  color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black)};
  font-size: ${props => props.theme.fontSize.large};
  margin-bottom: ${props => (props.noMargin ? 0 : props.theme.spacing.small)}px;
  margin-top: ${props => (props.noMargin ? 0 : props.theme.spacing.small)}px;
  line-height: ${props => props.theme.lineHeight.medium}px;
  font-family: ${props => props.theme.fontFamily.secondary.semiBold};
  ${props => props.center && 'text-align: center;'}
`;

export const Label = styled.Text<TextProps>`
  color: ${props => (props.color ? TextColor(props)[props.color] : props.theme.color.grayDark)};
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fontFamily.primary.regular};
  ${props => props.center && 'text-align: center;'}
  line-height: 20px;
`;

export const H3 = styled.Text.attrs({
  accessibilityRole: 'header',
})<TitleProps>`
  color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black)};
  font-size: ${props => props.theme.fontSize.medium};
  line-height: ${props => props.theme.lineHeight.large}px;
  font-family: ${props => props.theme.fontFamily.secondary.semiBold};
  ${props => props.mb && `margin-bottom: ${props.theme.spacing.xSmall}px;`}
  ${props => props.center && 'text-align: center;'}
`;

export const H4 = styled.Text.attrs({
  accessibilityRole: 'header',
})<TitleProps>`
  color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.grayDark)};
  font-size: ${props => props.theme.fontSize.small};
  line-height: ${props => props.theme.lineHeight.small}px;
  font-family: ${props => props.theme.fontFamily.secondary.semiBold};
  ${props => props.mb && `margin-bottom: ${props.theme.spacing.xSmall}px;`}
  ${props => props.center && 'text-align: center;'}
`;

export const Body = styled.Text<TextProps>`
  color: ${props => (props.color ? TextColor(props)[props.color] : props.theme.color.grayXDark)};
  font-size: ${props => props.theme.fontSize.xSmall};
  font-family: ${props =>
    props.weight ? props.theme.fontFamily.primary[props.weight] : props.theme.fontFamily.primary.regular};
  ${props => props.center && 'text-align: center;'}
`;

export const BodySecondary = styled.Text<TextProps>`
  color: ${props => (props.color ? TextColor(props)[props.color] : props.theme.color.grayMedium)};
  font-family: ${props =>
    props.weight ? props.theme.fontFamily.primary[props.weight] : props.theme.fontFamily.primary.regular};
  font-size: ${props => props.theme.fontSize.xxSmall};
  ${props => props.center && 'text-align: center;'}
`;

export const Price = styled.Text<TextProps>`
  color: ${props => (props.color ? TextColor(props)[props.color] : props.theme.color.primary)};
  font-family: ${props => props.theme.fontFamily.primary.semiBold};
  font-size: ${props => props.theme.fontSize.xLarge};
  ${props => props.center && 'text-align: center;'}
`;

interface InputLabelProps {
  hasError?: boolean;
}

export const InputLabel = styled.Text<InputLabelProps>`
  color: ${props => (props.hasError ? props.theme.color.alert : props.theme.color.grayXDark)};
  font-family: ${props => props.theme.fontFamily.primary.regular};
  font-size: ${props => props.theme.fontSize.xSmall};
`;

export const InputValueCss = css`
  color: ${props => props.theme.color.grayXDark};
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fontFamily.primary.regular};
  border-radius: ${props => props.theme.border.radiusXSmall};
`;

export const InputValue = styled.Text`
  ${InputValueCss}
`;

export const InputDisabled = styled.Text`
  ${InputValueCss}
  color: ${props => props.theme.color.disabled};
`;

export const InputPlaceholder = styled.Text`
  ${InputValueCss}
  color: ${props => props.theme.color.disabled};
`;

export const InputCaption = styled.Text`
  color: ${props => props.theme.color.grayXDark};
  font-size: ${props => props.theme.fontSize.xSmall};
  margin-top: ${props => props.theme.spacing.xSmall}px;
  font-family: ${props => props.theme.fontFamily.primary.regular};
  align-items: center;
  justify-content: center;
`;

export const InputCaptionError = styled(InputCaption)`
  color: ${props => props.theme.color.alert};
  align-items: center;
  justify-content: center;
`;

export const DT = styled.Text`
  color: ${props => props.theme.color.grayXDark};
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fontFamily.primary.bold};
`;

export const DD = styled.Text`
  color: ${props => props.theme.color.black};
  font-size: ${props => props.theme.fontSize.medium};
  font-family: ${props => props.theme.fontFamily.primary.medium};
`;

export const Link = styled.Text<TextProps>`
  color: ${props => (props.color ? TextColor(props)[props.color] : props.theme.color.secondaryDark)};
  font-family: ${props => props.theme.fontFamily.primary.medium};
  font-size: ${props => props.theme.fontSize.xSmall};
`;
