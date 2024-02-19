import { ThemeProps } from '@atomic/obj.theme';

type TextColorType =
  | 'alert'
  | 'alertDark'
  | 'success'
  | 'disabled'
  | 'white'
  | 'secondaryDark'
  | 'secondary'
  | 'warningDark'
  | 'grayMedium'
  | 'gray'
  | 'accessoryOrange'
  | 'accessoryGreen';

type WeightTextType = 'regular' | 'bold' | 'medium' | 'semibold' | 'italic';

export interface TextProps {
  color?: TextColorType;
  center?: boolean;
  noMargin?: boolean;
  weight?: WeightTextType;
}

export const TextColor: (props: ThemeProps) => Record<TextColorType, string> = props => ({
  success: props.theme.color.success,
  alert: props.theme.color.alert,
  alertDark: props.theme.color.alertDark,
  disabled: props.theme.color.gray,
  white: props.theme.color.white,
  secondary: props.theme.color.secondary,
  secondaryDark: props.theme.color.secondaryDark,
  warningDark: props.theme.color.warningDark,
  grayMedium: props.theme.color.grayMedium,
  accessoryOrange: props.theme.color.accessoryOrange,
  accessoryGreen: props.theme.color.accessoryGreen,
  gray: props.theme.color.gray,
});
