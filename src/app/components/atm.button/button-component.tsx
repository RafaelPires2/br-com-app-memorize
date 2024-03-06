import { appStrings } from '@app/app-strings';
import { ButtonVariants } from './button-modifiers.style';
import { ButtonText, ButtonTouchableStyles } from './button-styles';

interface ButtonBaseProps {
  text: string;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariants;
  onTap: () => void;
}

export const ButtonBase = ({ text, disabled, variant, loading, onTap }: ButtonBaseProps) => {
  return (
    <ButtonTouchableStyles variant={variant} disabled={disabled} onPress={() => onTap()}>
      <ButtonText disabled={disabled || loading} variant={variant}>
        {loading ? appStrings.button.loading : text}
      </ButtonText>
    </ButtonTouchableStyles>
  );
};

export const Button = {
  Primary: (props: ButtonBaseProps) => <ButtonBase variant="primary" {...props} />,
  Secondary: (props: ButtonBaseProps) => <ButtonBase variant="secondary" {...props} />,
  CallToAction: (props: ButtonBaseProps) => <ButtonBase variant="callToAction" {...props} />,
};
