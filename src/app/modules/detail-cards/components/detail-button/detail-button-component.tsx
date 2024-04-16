import { H4 } from '@atomic/atm.typography';
import { ButtonDetailStyles } from './detail-buttons-styles';

interface DetailButtonProps {
  text: string;
  color: 'alert' | 'success' | 'accessoryOrange' | 'accessoryBlue';
  onTap: () => void;
  textColorWhite?: boolean;
}

export const DetailButton = ({ color, text, onTap, textColorWhite }: DetailButtonProps) => {
  return (
    <ButtonDetailStyles color={color} onPress={() => onTap()}>
      <H4 center color={textColorWhite ? 'white' : null}>
        {text}
      </H4>
    </ButtonDetailStyles>
  );
};
