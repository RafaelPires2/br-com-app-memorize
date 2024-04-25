import { AddNewCardProps } from '../atm.new-decks-and-cards-form/new-decks-and-cards-form.component';
import { BoxInputText } from '@app/components/atm.input-text';
import { Control, Controller } from 'react-hook-form';
import { appStrings } from '@app/app-strings';
import { H3 } from '@atomic/atm.typography';

interface NewCardsInputsProps {
  control: Control<AddNewCardProps, any>;
}

const strings = appStrings.newCardPage;

export const NewCardsInputs = ({ control }: NewCardsInputsProps) => {
  return (
    <>
      <Controller
        control={control}
        name="frontCard"
        rules={{
          required: appStrings.validators.required,
          pattern: {
            value: /\S{1,}/,
            message: appStrings.validators.requiredOneCharacter,
          },
          minLength: {
            value: 1,
            message: appStrings.validators.requiredOneCharacter,
          },
          maxLength: {
            value: 300,
            message: appStrings.validators.requiredThreeHundredLetter,
          },
        }}
        render={({ field, fieldState }) => (
          <BoxInputText
            label={<H3 mb>{strings.front}</H3>}
            onChangeText={field.onChange}
            value={field.value}
            placeholder={strings.placeholderFront}
            errorMessage={fieldState?.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="backCard"
        rules={{
          required: appStrings.validators.required,
          pattern: {
            value: /\S{1,}/,
            message: appStrings.validators.requiredOneCharacter,
          },
          minLength: {
            value: 1,
            message: appStrings.validators.requiredOneCharacter,
          },
          maxLength: {
            value: 300,
            message: appStrings.validators.requiredThreeHundredLetter,
          },
        }}
        render={({ field, fieldState }) => (
          <BoxInputText
            label={<H3 mb>{strings.response}</H3>}
            onChangeText={field.onChange}
            value={field.value}
            placeholder={strings.placeholderResponse}
            errorMessage={fieldState?.error?.message}
          />
        )}
      />
    </>
  );
};
