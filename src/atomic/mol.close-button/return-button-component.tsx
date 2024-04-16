import { Feather } from 'react-native-vector-icons';
import { CloseButtonStyles } from './close-button-styles';
import { commonTheme } from '@atomic/obj.theme';

interface CloseButtonProps {
  onTap: () => void;
  whiteIconButton?: boolean;
}

const theme = commonTheme;

export const ReturnButton = ({ onTap, whiteIconButton }: CloseButtonProps) => {
  return (
    <CloseButtonStyles onPress={onTap}>
      <Feather
        name="arrow-left"
        size={theme.iconSize.medium}
        color={whiteIconButton ? theme.color.white : theme.color.primaryDark}
      />
    </CloseButtonStyles>
  );
};
