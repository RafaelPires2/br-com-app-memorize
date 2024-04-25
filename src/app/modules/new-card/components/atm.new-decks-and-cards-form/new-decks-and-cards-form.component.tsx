import { useGetCardsContext, useGetDecksContext } from '@app/data/queries/home';
import { useAxiosPost } from '@app/core/axios/axios-post.hook';
import { IsNewDeckInput } from '../is-new-deck-input';
import { NewCardsInputs } from '../new-cards-inputs';
import { Button } from '@app/components/atm.button';
import { CheckBoxDecks } from '../check-box-decks';
import { HasDeckInput } from '../has-deck-input';
import { VSeparator } from '@atomic/obj.grid';
import { Divider } from '@atomic/atm.divider';
import { appStrings } from '@app/app-strings';
import { H1 } from '@atomic/atm.typography';
import { useForm } from 'react-hook-form';
import { CardI, DeckI } from '@app/model';
import { ScrollView } from 'react-native';
import React, { useState } from 'react';

export interface AddNewCardProps {
  deck: string;
  frontCard: string;
  backCard: string;
  deckSelect: string;
}

const strings = appStrings.newCardPage;

export const NewDecksAndCardsForm = () => {
  const { decks, refetch: refetchDeck } = useGetDecksContext();
  const { refetch: refetchCard } = useGetCardsContext();
  const [checkedNewCard, setCheckedNewCard] = useState(true);

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

  interface CreateCardVariables {
    front: string;
    back: string;
    deckTitle: string;
  }

  const [createDeck, { loading: loadingDeckPost }] = useAxiosPost<DeckI, CreateDeckVariables>('decks', {
    onCompleted: () => {
      reset(), refetchDeck(), refetchCard();
    },
  });

  const [createCard, { loading: loadingCardPost }] = useAxiosPost<CardI, CreateCardVariables>('cards', {
    onCompleted: () => {
      reset(), refetchDeck(), refetchCard();
    },
  });

  const onSubmit = (data: AddNewCardProps) => {
    if (isNewDeckCadaster === true && data?.deck) {
      createDeck({ title: data.deck.trim() });
    }

    if (isNewDeckCadaster === true || data?.deckSelect) {
      createCard({
        front: data?.frontCard.trim(),
        back: data?.backCard.trim(),
        deckTitle: data?.deck.trim() || data.deckSelect.trim(),
      });
    }
  };

  return (
    <>
      <H1 center>{strings.isNewDeck}</H1>
      <VSeparator />

      <CheckBoxDecks checkedNewCard={checkedNewCard} reset={reset} setCheckedNewCard={setCheckedNewCard} />

      <VSeparator />
      <Divider />
      <VSeparator />

      <ScrollView>
        {checkedNewCard ? (
          <IsNewDeckInput control={control} isNewDeckCadaster={isNewDeckCadaster} />
        ) : (
          <HasDeckInput control={control} decks={decks} />
        )}
        <NewCardsInputs control={control} />

        <VSeparator spacing="double" />

        <Button.CallToAction
          text={appStrings.button.send}
          disabled={!formState.isValid || !isNewDeckCadaster}
          onTap={handleSubmit(onSubmit)}
          loading={loadingDeckPost || loadingCardPost}
        />
      </ScrollView>
    </>
  );
};
