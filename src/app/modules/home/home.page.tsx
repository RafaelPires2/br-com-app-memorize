import { BottomSheet } from '@atomic/mol.modal';
import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => handleShowModal()}
        style={{ width: 200, height: 56, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
        <Text>navegar</Text>
      </TouchableOpacity>
      <BottomSheet
        visible={showModal}
        onShowModal={() => handleShowModal()}
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
    </>
  );
};
