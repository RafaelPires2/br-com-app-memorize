import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const HomePage = ({ navigation }: any) => {
  return (
    <>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('new-card')}
        style={{ width: 200, height: 56, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
        <Text>navegar</Text>
      </TouchableOpacity>
    </>
  );
};
