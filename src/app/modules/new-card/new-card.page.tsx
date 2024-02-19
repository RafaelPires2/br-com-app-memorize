import React from 'react';
import { Text } from 'react-native';
import { BottomSheet } from '@atomic/mol.modal';
import { useNavigation } from '@react-navigation/native';

export const NewCardPage = () => {
  const navigation = useNavigation();
  return (
    <BottomSheet
      visible={true}
      onCloseModal={() => navigation.goBack()}
      children={
        <>
          <Text>Oi</Text>
          <Text>Oi</Text>
          <Text>Oi</Text>
          <Text>Oi</Text>
          <Text>Oi</Text>
          <Text>Oi</Text>
        </>
      }
    />
  );
};
