import React from 'react';
import { FlatList } from 'react-native';
import { HomeHeader } from '@app/components/atm.header';
import { DeckCard } from '@app/components/atm.deck-card';
import { useNavigation } from '@react-navigation/native';
import { VBox, VSeparator } from '@atomic/obj.grid/grid.component';
import { SeparatorFlatlist } from '@app/components/atm.separator-flatlist';
import { RootNavigationProp } from '@app/core/navigation/routes/navigation-types';
import { DeckType, useCardsQuery, useDecksQuery, useUserQuery } from '@app/data/queries/home';

const idUser = '1';

export const HomePage = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const { user } = useUserQuery({ idUser });
  const { amountDecks, decks } = useDecksQuery();
  const { amountCardsGeneral, cards } = useCardsQuery();

  const renderDecksItem = ({ item }: { item: DeckType }) => (
    <VBox>
      <DeckCard
        title={item.title}
        deckId={item.id}
        dataCards={cards}
        onTap={() => navigation.navigate('detailCardsPage')}
      />
    </VBox>
  );

  return (
    <>
      <HomeHeader name={user?.name} amountDecks={amountDecks} amountCards={amountCardsGeneral} progress={0.3} />
      <VSeparator />
      <FlatList
        data={decks}
        renderItem={renderDecksItem}
        keyExtractor={item => item.id}
        ListFooterComponent={SeparatorFlatlist}
      />
    </>
  );
};
