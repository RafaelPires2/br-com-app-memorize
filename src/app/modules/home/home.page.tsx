import React from 'react';
import { FlatList } from 'react-native';
import { HomeHeader } from '@app/components/atm.header';
import { DeckCard } from '@app/components/atm.deck-card';
import { useNavigation } from '@react-navigation/native';
import { VBox, VSeparator } from '@atomic/obj.grid/grid.component';
import { DeckType, useDecksQuery, useUserQuery } from '@app/data/queries/home';
import { RootNavigationProp } from '@app/core/navigation/routes/navigation-types';

const idUser = '1';

export const HomePage = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const { user } = useUserQuery({ idUser });
  const { amountDecks, decks } = useDecksQuery();

  const renderDecksItem = ({ item }: { item: DeckType }) => (
    <DeckCard title={item.title} amountCards={5} onTap={() => navigation.navigate('detailCardsPage')} />
  );

  return (
    <>
      <HomeHeader name={user?.name} amountDecks={amountDecks} amountCards={15} progress={0.3} />
      <VSeparator />
      <VBox>
        <FlatList data={decks} renderItem={renderDecksItem} keyExtractor={item => item.id} />
      </VBox>
    </>
  );
};
