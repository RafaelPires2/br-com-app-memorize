import React from 'react';
import { FlatList } from 'react-native';
import { appStrings } from '@app/app-strings';
import { commonTheme } from '@atomic/obj.theme';
import { Feather } from 'react-native-vector-icons';
import { VBox } from '@atomic/obj.grid/grid.component';
import { HomeHeader } from '@app/components/atm.header';
import { DeckCard } from '@app/components/atm.deck-card';
import { useNavigation } from '@react-navigation/native';
import { SeparatorFlatlist } from '@app/components/atm.separator-flatlist';
import { RootNavigationProp } from '@app/core/navigation/routes/navigation-types';
import { LoadingState } from '@app/components/atm.loading-state/loading-state-component';
import { DeckType, useCardsQuery, useDecksQuery, useUserQuery } from '@app/data/queries/home';

const idUser = '1';
const theme = commonTheme;

export const HomePage = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const { user } = useUserQuery({ idUser });
  const { amountDecks, decks, refetch, error, loading } = useDecksQuery();
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

      {/* TODO: Refactor dos dados quando da erro, não carrega quando aciono o refetch */}

      <FlatList
        data={decks}
        renderItem={renderDecksItem}
        keyExtractor={item => item.id}
        ListFooterComponent={decks?.length > 0 && SeparatorFlatlist}
        ListEmptyComponent={
          <LoadingState
            imageIcon={<Feather name="bell" size={theme.iconSize.smallGif} color={theme.color.secondaryDark} />}
            emptyStateMessage={appStrings.emptyState.emptyStateDeck}
            error={error}
            loading={loading}
            refetch={() => refetch()}
          />
        }
        contentContainerStyle={{ flex: decks?.length > 0 ? 0 : 1 }}
      />
    </>
  );
};
