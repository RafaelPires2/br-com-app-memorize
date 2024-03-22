import React from 'react';
import { CardI } from '@app/model';
import { H2 } from '@atomic/atm.typography';
import { appStrings } from '@app/app-strings';
import { commonTheme } from '@atomic/obj.theme';
import { Feather } from 'react-native-vector-icons';
import { DeckCardStyles } from './deck-card-styles';
import { HBox, VBox, VSeparator } from '@atomic/obj.grid/grid.component';

const theme = commonTheme;
const strings = appStrings.homePage;

interface DeckCardProps {
  onTap: () => void;
  title: string;
  dataCards: CardI[];
}

export const DeckCard = ({ onTap, title, dataCards }: DeckCardProps) => {
  const numberOfCardsFromDeck = dataCards?.filter(card => card?.deckTitle === title).length;

  return (
    <>
      <DeckCardStyles onPress={() => onTap()}>
        <VSeparator />
        <VBox>
          <HBox>
            <HBox.Item>
              <H2 numberOfLines={1}>
                {title} {strings.deckCard.amountOfItems(numberOfCardsFromDeck)}
              </H2>
            </HBox.Item>
            <HBox.Separator />
            <HBox.Item vAlign="center" hAlign="flex-end" wrap>
              <Feather name="arrow-right" size={theme.iconSize.small} color={theme.color.gray} />
            </HBox.Item>
          </HBox>
        </VBox>
        <VSeparator />
      </DeckCardStyles>
      <VSeparator spacing="half" />
    </>
  );
};
