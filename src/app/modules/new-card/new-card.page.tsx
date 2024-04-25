import { NewDecksAndCardsForm } from './components/atm.new-decks-and-cards-form';
import { useNavigation } from '@react-navigation/native';
import { BottomSheet } from '@atomic/mol.modal';
import React from 'react';

export const NewCardPage = () => {
  const navigation = useNavigation();
  return (
    <BottomSheet
      visible={true}
      onCloseModal={() => navigation.goBack()}
      children={
        <>
          <NewDecksAndCardsForm />
        </>
      }
    />
  );
};
