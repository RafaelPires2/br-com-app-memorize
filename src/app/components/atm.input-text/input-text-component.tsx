import { Body } from '@atomic/atm.typography';
import { commonTheme } from '@atomic/obj.theme';
import { InputTextStyle } from './input-text.styles';
import { VSeparator } from '@atomic/obj.grid';

interface InputTextProps {
  label: React.JSX.Element;
  errorMessage: string;
  value: string | number;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const theme = commonTheme;

export const InputText = ({ label, errorMessage, value, onChangeText, placeholder }: InputTextProps) => {
  return (
    <>
      {label}
      <InputTextStyle
        placeholderTextColor={theme.color.grayMedium}
        placeholder={placeholder}
        children={value}
        onChangeText={text => onChangeText(text)}
      />
      {!!errorMessage && <VSeparator spacing="xSmall" />}
      <Body color="alert">{errorMessage}</Body>
    </>
  );
};
