import React from 'react';
import { FlatList } from 'react-native';
import { H2 } from '@atomic/atm.typography';
import { appStrings } from '@app/app-strings';
import { commonTheme } from '@atomic/obj.theme';
import { Feather } from 'react-native-vector-icons';
import { Button } from '@app/components/atm.button';
import { HomeHeader } from '@app/components/atm.header';
import { DeckCard } from '@app/components/atm.deck-card';
import { useNavigation } from '@react-navigation/native';
import { VBox, VSeparator } from '@atomic/obj.grid/grid.component';
import { SeparatorFlatlist } from '@app/components/atm.separator-flatlist';
import { RootNavigationProp } from '@app/core/navigation/routes/navigation-types';
import { DeckType, useCardsQuery, useDecksQuery, useUserQuery } from '@app/data/queries/home';

const idUser = '1';
const theme = commonTheme;

export const HomePage = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const { user } = useUserQuery({ idUser });
  const { amountDecks, decks, refetch, error } = useDecksQuery();
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
      {/* TODO: Refactor do loading state */}
      {/* TODO: Refactor dos dados quando da erro, não carrega quando aciono o refetch */}

      {error ? (
        <VBox vAlign="center" hAlign="center" vGrow>
          <Feather name="alert-triangle" size={theme.iconSize.smallGif} color={theme.color.alert} />
          <VSeparator />
          <H2 center>Ocorreu um erro ao tentar carregar os dados</H2>
          <VSeparator spacing="double" />
          <Button.CallToAction text={appStrings.button.loadingAgain} onTap={() => refetch()} />
        </VBox>
      ) : (
        <FlatList
          data={decks}
          renderItem={renderDecksItem}
          keyExtractor={item => item.id}
          ListFooterComponent={decks && SeparatorFlatlist}
        />
      )}
    </>
  );
};
