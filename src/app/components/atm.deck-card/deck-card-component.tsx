import React from 'react';
import { H2 } from '@atomic/atm.typography';
import { appStrings } from '@app/app-strings';
import { commonTheme } from '@atomic/obj.theme';
import { Feather } from 'react-native-vector-icons';
import { DeckCardStyles } from './deck-card-styles';
import { HBox, VBox, VSeparator } from '@atomic/obj.grid';

const theme = commonTheme;
const strings = appStrings.homePage;

interface DeckCardProps {
  onTap: () => void;
  title: string;
  amountCards: number;
}

export const DeckCard = ({ onTap, title, amountCards }: DeckCardProps) => {
  return (
    <DeckCardStyles onPress={() => onTap()}>
      <VSeparator />
      <VBox>
        <HBox vAlign="space-between" hAlign="center">
          <H2>
            {title} {strings.deckCard.amountOfItems(amountCards)}
          </H2>
          <Feather name="arrow-right" size={theme.iconSize.small} color={theme.color.gray} />
        </HBox>
      </VBox>
      <VSeparator />
    </DeckCardStyles>
  );
};
