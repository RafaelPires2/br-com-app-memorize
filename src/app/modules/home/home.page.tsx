import React from 'react';
import { VBox, VSeparator } from '@atomic/obj.grid';
import { DeckCard } from '@app/components/atm.deck-card';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '@app/core/navigation/routes/navigation-types';

// TODO: Refatorar tabs e stacks
// TODO: Usar Json Server para api
// TODO: Flatlist na home

export const HomePage = () => {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <>
      <VSeparator />
      <VBox>
        <DeckCard title="Irregular Verbs" amountCards={6} onTap={() => navigation.navigate('detailCardsPage')} />
      </VBox>
    </>
  );
};
