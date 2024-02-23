import React from 'react';
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
  amountCards: number;
}

export const DeckCard = ({ onTap, title, amountCards }: DeckCardProps) => {
  return (
    <DeckCardStyles onPress={() => onTap()}>
      <VSeparator />
      <VBox>
        <HBox>
          <HBox.Item>
            <H2>
              {title} {strings.deckCard.amountOfItems(amountCards)}
            </H2>
          </HBox.Item>
          <HBox.Item vAlign="center" hAlign="flex-end">
            <Feather name="arrow-right" size={theme.iconSize.small} color={theme.color.gray} />
          </HBox.Item>
        </HBox>
      </VBox>
      <VSeparator />
    </DeckCardStyles>
  );
};
