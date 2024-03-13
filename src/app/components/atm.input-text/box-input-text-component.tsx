import { commonTheme } from '@atomic/obj.theme';
import { BoxInputTextStyle } from './input-text.styles';
import { Body } from '@atomic/atm.typography';
import { VSeparator } from '@atomic/obj.grid';

interface BoxInputTextProps {
  value: string | number;
  placeholder: string;
  label: React.JSX.Element;
  onChangeText: (text: string) => void;
  errorMessage: string;
}

const theme = commonTheme;

export const BoxInputText = ({ label, onChangeText, placeholder, value, errorMessage }: BoxInputTextProps) => {
  return (
    <>
      {label}
      <BoxInputTextStyle
        placeholderTextColor={theme.color.grayMedium}
        onChangeText={text => onChangeText(text)}
        children={value}
        placeholder={placeholder}
        multiline={true}
        textAlignVertical="top"
      />
      {!!errorMessage && <VSeparator spacing="xSmall" />}
      <Body color="alert">{errorMessage}</Body>
    </>
  );
};
