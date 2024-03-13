import axios from 'axios';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Divider } from '@atomic/atm.divider';
import { appStrings } from '@app/app-strings';
import { Checkbox } from 'react-native-paper';
import { commonTheme } from '@atomic/obj.theme';
import { H1, H3 } from '@atomic/atm.typography';
import { HBox, VSeparator } from '@atomic/obj.grid';
import { Button } from '@app/components/atm.button';
import { useForm, Controller } from 'react-hook-form';
import { useDecksQuery } from '@app/data/queries/home';
import { CheckBoxWrapper } from './add-new-card-styles';
import { CheckBoxCircleStyle } from '@app/components/atm.check-box';
import { SelectDropdownButton } from '@app/components/atm.select-button';
import { BoxInputText, InputText } from '@app/components/atm.input-text';

interface AddNewCardProps {
  deck: string | number;
  frontCard: string | number;
  backCard: string | number;
  deckSelect: string | number;
}

const theme = commonTheme;
const strings = appStrings.newCardPage;

export const AddNewCard = () => {
  const { decks } = useDecksQuery();
  const [checkedNewCard, setCheckedNewCard] = useState(true);
  const [deckIsEqual, setDeckIsEqual] = useState(false);

  const { control, handleSubmit, formState, reset, watch } = useForm<AddNewCardProps>({
    defaultValues: {
      deck: '',
      deckSelect: '',
      frontCard: '',
      backCard: '',
    },
    mode: 'onChange',
  });

  const fieldDeck = watch('deck');
  console.log(fieldDeck);

  const isNewDeckCadaster = decks?.every(deck => {
    const deckTitle = deck.title.toLocaleLowerCase();
    const inputTextDeck = fieldDeck.toString().toLocaleLowerCase();

    return deckTitle !== inputTextDeck;
  });

  const newDeckPost = (data: AddNewCardProps) =>
    axios.post('http://localhost:3000/decks', {
      title: data?.deck ? data?.deck : data?.deckSelect,
    });

  const newCardPost = (data: AddNewCardProps) =>
    axios
      .post('http://localhost:3000/cards', {
        front: data?.frontCard,
        back: data?.backCard,
      })
      .then(res => console.log('Sucesso'))
      .catch(err => console.log('Erro', err));

  const onSubmit = (data: AddNewCardProps) => {
    if (isNewDeckCadaster || data.deckSelect) {
      newDeckPost(data);
      newCardPost(data);

      reset();
    } else {
      setDeckIsEqual(true);
    }
  };

  return (
    <>
      <H1 center>{strings.isNewDeck}</H1>
      <VSeparator />

      <View style={{ alignItems: 'center' }}>
        <CheckBoxWrapper>
          <HBox.Item vAlign="center" wrap>
            <CheckBoxCircleStyle>
              <Checkbox
                color={theme.color.secondaryDark}
                status={checkedNewCard ? 'checked' : 'unchecked'}
                onPress={() => {
                  reset();
                  setCheckedNewCard(!checkedNewCard);
                }}
              />
            </CheckBoxCircleStyle>
          </HBox.Item>
          <HBox.Separator spacing="half" />
          <HBox.Item vAlign="center" hAlign="flex-start">
            <H3 center>{strings.checkYes}</H3>
          </HBox.Item>
          <HBox.Separator />

          <HBox.Item vAlign="center" wrap>
            <CheckBoxCircleStyle>
              <Checkbox
                color={theme.color.secondaryDark}
                status={!checkedNewCard ? 'checked' : 'unchecked'}
                onPress={() => {
                  reset();
                  setCheckedNewCard(!checkedNewCard);
                }}
              />
            </CheckBoxCircleStyle>
          </HBox.Item>
          <HBox.Separator spacing="half" />
          <HBox.Item vAlign="center" hAlign="flex-start">
            <H3 center>{strings.checkNo}</H3>
          </HBox.Item>
        </CheckBoxWrapper>
      </View>

      <VSeparator />
      <Divider />
      <VSeparator />

      <ScrollView>
        {checkedNewCard ? (
          <>
            <Controller
              control={control}
              name="deck"
              rules={{
                required: appStrings.validators.required,
                minLength: {
                  value: 3,
                  message: appStrings.validators.requiredThreeLetter,
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
                  errorMessage={deckIsEqual ? appStrings.validators.thisDeckAlreadyExists : fieldState?.error?.message}
                />
              )}
            />
          </>
        ) : (
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
        )}
        <>
          <Controller
            control={control}
            name="frontCard"
            rules={{
              required: appStrings.validators.required,
              minLength: {
                value: 3,
                message: appStrings.validators.requiredThreeLetter,
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
              minLength: {
                value: 3,
                message: appStrings.validators.requiredThreeLetter,
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

          <VSeparator spacing="double" />
          <Button.CallToAction
            text={appStrings.button.send}
            disabled={!formState.isValid}
            onTap={handleSubmit(onSubmit)}
          />
        </>
      </ScrollView>
    </>
  );
};
