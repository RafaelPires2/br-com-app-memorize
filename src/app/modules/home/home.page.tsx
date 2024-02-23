import React from 'react';
import { HomeHeader } from '@app/components/atm.header';
import { DeckCard } from '@app/components/atm.deck-card';
import { useNavigation } from '@react-navigation/native';
import { VBox, VSeparator } from '@atomic/obj.grid/grid.component';
import { RootNavigationProp } from '@app/core/navigation/routes/navigation-types';

// TODO: Refatorar tabs e stacks
// TODO: Usar Json Server para api
// TODO: Flatlist na home

const mock = {
  name: 'Rafael Pires',
  amountDecks: 1,
  amountCards: 15,
  progress: 0.3,
};

export const HomePage = () => {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <>
      <HomeHeader
        name={mock.name}
        amountDecks={mock.amountDecks}
        amountCards={mock.amountCards}
        progress={mock.progress}
      />
      <VSeparator />
      <VBox>
        <DeckCard title="Irregular Verbs" amountCards={6} onTap={() => navigation.navigate('detailCardsPage')} />
      </VBox>
    </>
  );
};
