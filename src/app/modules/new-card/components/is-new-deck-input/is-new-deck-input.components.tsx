import { AddNewCardProps } from '../atm.new-decks-and-cards-form/new-decks-and-cards-form.component';
import { InputText } from '@app/components/atm.input-text';
import { Control, Controller } from 'react-hook-form';
import { appStrings } from '@app/app-strings';
import { H3 } from '@atomic/atm.typography';

interface IsNewDeckInputProps {
  control: Control<AddNewCardProps, any>;
  isNewDeckCadaster: boolean;
}

const strings = appStrings.newCardPage;

export const IsNewDeckInput = ({ control, isNewDeckCadaster }: IsNewDeckInputProps) => {
  return (
    <>
      <Controller
        control={control}
        name="deck"
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
            value: 30,
            message: appStrings.validators.requiredThirtyLetter,
          },
        }}
        render={({ field, fieldState }) => (
          <InputText
            label={<H3>{strings.nameNewDeck}</H3>}
            placeholder={strings.placeholderDeck}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={!isNewDeckCadaster ? appStrings.validators.thisDeckAlreadyExists : fieldState?.error?.message}
          />
        )}
      />
    </>
  );
};
