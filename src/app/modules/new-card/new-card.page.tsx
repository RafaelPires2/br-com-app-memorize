import React from 'react';
import { Text } from 'react-native';
import { BottomSheet } from '@atomic/mol.modal';
import { useNavigation } from '@react-navigation/native';
import { AddNewCard } from './components/atm.add-new-card';

export const NewCardPage = () => {
  const navigation = useNavigation();
  return (
    <BottomSheet
      visible={true}
      onCloseModal={() => navigation.goBack()}
      children={
        <>
          <AddNewCard />
        </>
      }
    />
  );
};
