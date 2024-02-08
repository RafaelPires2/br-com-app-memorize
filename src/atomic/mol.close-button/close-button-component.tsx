import { Feather } from 'react-native-vector-icons';
import { CloseButtonStyles } from './close-button-styles';
import { commonTheme } from '@atomic/obj.theme';

interface CloseButtonProps {
  onTap: () => void;
}

const theme = commonTheme;

export const CloseButton = ({ onTap }: CloseButtonProps) => {
  return (
    <CloseButtonStyles onPress={onTap}>
      <Feather name="x" size={theme.iconSize.medium} color={theme.color.primaryDark} />
    </CloseButtonStyles>
  );
};
