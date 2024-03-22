import React, { useState } from 'react';
import { CardI, DeckI } from '@app/model';
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
import { useAxiosPost } from '@app/core/axios/axios-post.hook';
import { CheckBoxCircleStyle } from '@app/components/atm.check-box';
import { SelectDropdownButton } from '@app/components/atm.select-button';
import { BoxInputText, InputText } from '@app/components/atm.input-text';

interface AddNewCardProps {
  deck: string;
  frontCard: string;
  backCard: string;
  deckSelect: string;
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

  const isNewDeckCadaster = decks?.every(deck => {
    const deckTitle = deck.title.toLocaleLowerCase();
    const inputTextDeck = fieldDeck.toString().toLocaleLowerCase();

    return deckTitle !== inputTextDeck;
  });

  interface CreateDeckVariables extends Pick<DeckI, 'title'> {}

  interface CreateCardResult extends Omit<CardI, 'idDeck'> {}

  interface CreateCardVariables {
    front: string;
    back: string;
  }

  const [createDeck, { loading: loadingDeckPost }] = useAxiosPost<DeckI, CreateDeckVariables>('decks', {
    onCompleted: () => reset(),
  });

  const [createCard, { loading: loadingCardPost }] = useAxiosPost<CreateCardResult, CreateCardVariables>('cards', {
    onCompleted: () => reset(),
  });

  const onSubmit = (data: AddNewCardProps) => {
    createDeck({ title: data?.deck ? data?.deck.trim() : data?.deckSelect });
    if (isNewDeckCadaster || data.deckSelect) {
      createCard({ front: data?.frontCard.trim(), back: data?.backCard.trim() });
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
                pattern: {
                  value: /\S{3,}/,
                  message: appStrings.validators.requiredThreeLetter,
                },
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
              pattern: {
                value: /\S{3,}/,
                message: appStrings.validators.requiredThreeLetter,
              },
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
              pattern: {
                value: /\S{3,}/,
                message: appStrings.validators.requiredThreeLetter,
              },
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
            loading={loadingDeckPost || loadingCardPost}
          />
        </>
      </ScrollView>
    </>
  );
};
