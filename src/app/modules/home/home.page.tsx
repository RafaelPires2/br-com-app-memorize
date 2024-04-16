import { useGetCardsContext, useGetDecksContext, useUserQuery } from '@app/data/queries/home';
import { LoadingState } from '@app/components/atm.loading-state/loading-state-component';
import { RootNavigationProp } from '@app/core/navigation/routes/navigation-types';
import { SeparatorFlatlist } from '@app/components/atm.separator-flatlist';
import { useNavigation } from '@react-navigation/native';
import { DeckCard } from '@app/components/atm.deck-card';
import { VBox } from '@atomic/obj.grid/grid.component';
import { Feather } from 'react-native-vector-icons';
import { HomeHeader } from './components/header';
import { commonTheme } from '@atomic/obj.theme';
import { appStrings } from '@app/app-strings';
import { FlatList } from 'react-native';
import { DeckI } from '@app/model';
import React from 'react';

const idUser = '1';
const theme = commonTheme;

export const HomePage = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const { user, refetch: userRefetch } = useUserQuery({ idUser });

  const { decks, amountDecks, error, loading, refetch: deckRefetch } = useGetDecksContext();
  const { amountCardsGeneral, cards, refetch: cardRefetch } = useGetCardsContext();

  const deckOrganizedAsc = decks?.slice().sort((a, b) => a.title.localeCompare(b.title));

  const refetchData = () => {
    userRefetch(), deckRefetch(), cardRefetch();
  };

  const renderDecksItem = ({ item }: { item: DeckI }) => (
    <VBox>
      <DeckCard
        title={item.title}
        dataCards={cards}
        onTap={() => navigation.navigate('detailCardsPage', { title: item?.title })}
      />
    </VBox>
  );

  return (
    <>
      <HomeHeader name={user?.name} amountDecks={amountDecks} amountCards={amountCardsGeneral} progress={0.3} />

      <FlatList
        data={deckOrganizedAsc}
        renderItem={renderDecksItem}
        keyExtractor={item => item.id}
        ListFooterComponent={deckOrganizedAsc?.length > 0 && SeparatorFlatlist}
        ListEmptyComponent={
          <LoadingState
            imageIcon={<Feather name="bell" size={theme.iconSize.smallGif} color={theme.color.secondaryDark} />}
            emptyStateMessage={appStrings.emptyState.emptyStateDeck}
            error={error}
            loading={loading}
            refetch={() => refetchData()}
          />
        }
        contentContainerStyle={{ flex: deckOrganizedAsc?.length > 0 ? 0 : 1 }}
      />
    </>
  );
};
