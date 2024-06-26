import { Feather } from 'react-native-vector-icons';
import { CloseButtonStyles } from './close-button-styles';
import { commonTheme } from '@atomic/obj.theme';

interface CloseButtonProps {
  onTap: () => void;
  whiteXButton?: boolean;
}

const theme = commonTheme;

export const CloseButton = ({ onTap, whiteXButton }: CloseButtonProps) => {
  return (
    <CloseButtonStyles onPress={onTap}>
      <Feather
        name="x"
        size={theme.iconSize.medium}
        color={whiteXButton ? theme.color.white : theme.color.primaryDark}
      />
    </CloseButtonStyles>
  );
};
