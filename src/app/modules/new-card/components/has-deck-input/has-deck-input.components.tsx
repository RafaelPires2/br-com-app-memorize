import { AddNewCardProps } from '../atm.new-decks-and-cards-form/new-decks-and-cards-form.component';
import { SelectDropdownButton } from '@app/components/atm.select-button';
import { Control, Controller } from 'react-hook-form';
import { appStrings } from '@app/app-strings';
import { H3 } from '@atomic/atm.typography';
import { DeckI } from '@app/model';

interface HasDeckInputProps {
  control: Control<AddNewCardProps, any>;
  decks: DeckI[];
}

const strings = appStrings.newCardPage;

export const HasDeckInput = ({ control, decks }: HasDeckInputProps) => {
  return (
    <>
      <Controller
        control={control}
        name="deckSelect"
        rules={{
          required: appStrings.validators.required,
        }}
        render={({ field, fieldState }) => (
          <SelectDropdownButton
            data={decks || []}
            onTap={field.onChange}
            label={<H3 mb>{strings.changeDeck}</H3>}
            errorMessage={fieldState?.error?.message}
          />
        )}
      />
    </>
  );
};
