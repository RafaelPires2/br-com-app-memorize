import { HBox, VBox, VSeparator } from '@atomic/obj.grid/grid.component';
import { ImageIcon } from '@atomic/atm.icon-image/icon-image.component';
import { formattedCurrentDate } from '@app/utils/date-components';
import { HeaderStyles } from '@app/components/atm.header';
import { Asset } from '@atomic/obj.asset/asset.component';
import { Body, H3 } from '@atomic/atm.typography';
import * as Progress from 'react-native-progress';
import { commonTheme } from '@atomic/obj.theme';
import { appStrings } from '@app/app-strings';
import React from 'react';

const HEIGHT_PROGRESS_BAR = 10;

const strings = appStrings.homePage;
const theme = commonTheme;

interface HomeHeaderProps {
  name: string;
  amountDecks: number;
  amountCards: number;
  progress: number;
}

export const HomeHeader = ({ name, amountDecks, amountCards, progress }: HomeHeaderProps) => {
  const percentOfCardsVisualized = progress / amountCards;

  return (
    <>
      <HeaderStyles>
        <VBox>
          <HBox>
            <HBox.Item vAlign="center" wrap>
              <ImageIcon source={Asset.icon.Logo} size="large" />
            </HBox.Item>
            <HBox.Separator />
            <HBox.Item hAlign="flex-start" vAlign="center">
              <Body center color="white">
                {formattedCurrentDate()}
              </Body>
              <H3 center color="white">
                {strings.header.welcome(name)}
              </H3>
            </HBox.Item>
          </HBox>
          <VSeparator spacing="double" />

          <HBox>
            <HBox.Item>
              <H3 color="white">{strings.header.amountDecks(amountDecks)}</H3>
              <H3 color="white">{strings.header.amountCards(amountCards)}</H3>
            </HBox.Item>
            <HBox.Item>
              <H3 color="white">{strings.header.progress}</H3>
              <VSeparator spacing="half" />
              <Progress.Bar
                progress={percentOfCardsVisualized || 0}
                height={HEIGHT_PROGRESS_BAR}
                color={theme.color.secondary}
                borderColor={theme.color.secondaryDark}
              />
            </HBox.Item>
          </HBox>
        </VBox>

        <VSeparator />
      </HeaderStyles>
      <VSeparator />
    </>
  );
};
