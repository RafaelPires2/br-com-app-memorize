import { ButtonDetailWrapper, ButtonsDetailNextWrapper, DetailButton } from './components/detail-button';
import { useMoveElementFromPosition } from '@app/utils/move-element-from-position-hook';
import { RootNavigationProp } from '@app/core/navigation/routes/navigation-types';
import { ReturnButton } from '@atomic/mol.close-button/return-button-component';
import { HBox, VBox, VSeparator } from '@atomic/obj.grid/grid.component';
import { BoxTextDetailStyles } from './components/box-text-detail';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useGetCardsContext } from '@app/data/queries/home';
import { HeaderStyles } from '@app/components/atm.header';
import { Button } from '@app/components/atm.button';
import { Body, H1 } from '@atomic/atm.typography';
import { appStrings } from '@app/app-strings';
import { ScrollView } from 'react-native';
import React, { useState } from 'react';

const strings = appStrings.detailPage;

const MOVE_CARD_SECOND_POSITION = 1;
const MOVE_CARD_FOURTH_POSITION = 3;
const MOVE_CARD_SEVENTH_POSITION = 6;

export const DetailCardsPage = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [toggleCard, setToggleCard] = useState(true);

  const { cards } = useGetCardsContext();

  // TODO: Corrigir passagem de parametros para não dar mais erro
  // TODO: Adicionar status ao card (Visualizado) para preencher barra de progresso.
  // TODO: Adicionar estado de vazio na pagina de detalhes quando não houver card
  // TODO: Adicionar opção de deletar card
  // TODO: Adicionar opção de deletar deck

  // TODO: Criar pagina minha conta.
  // TODO: Criar página de login
  // TODO: Criar página de criação de conta
  // TODO: Criar página de esqueci minha senha

  const route = useRoute();
  const { title } = route.params;

  const findCardsFromDeck = cards?.filter(item => {
    if (item.deckTitle === title) {
      return item;
    }
  });

  const { findFirstCard, moveCardOfPosition, moveCardLastPosition } = useMoveElementFromPosition({
    array: findCardsFromDeck,
  });

  return (
    <>
      <HeaderStyles>
        <ReturnButton whiteIconButton onTap={() => navigation.goBack()} />
      </HeaderStyles>

      <VSeparator />

      <VBox hAlign="center">
        <H1>{toggleCard ? strings.front : strings.back}</H1>

        <VSeparator />

        <BoxTextDetailStyles>
          <ScrollView>
            <Body center>{toggleCard ? findFirstCard?.front : findFirstCard?.back}</Body>
          </ScrollView>
        </BoxTextDetailStyles>

        <VSeparator spacing="double" />

        <ButtonDetailWrapper>
          <Button.CallToAction
            text={toggleCard ? appStrings.button.seeFrontCard : appStrings.button.seeBackCard}
            onTap={() => setToggleCard(prev => !prev)}
          />
        </ButtonDetailWrapper>

        <VSeparator spacing="double" />

        <ButtonsDetailNextWrapper>
          <HBox>
            <HBox.Item>
              <DetailButton
                text={strings.again}
                textColorWhite
                color="alert"
                onTap={() => moveCardOfPosition(MOVE_CARD_SECOND_POSITION)}
              />
            </HBox.Item>

            <HBox.Item>
              <DetailButton
                text={strings.hard}
                color="accessoryOrange"
                onTap={() => moveCardOfPosition(MOVE_CARD_FOURTH_POSITION)}
              />
            </HBox.Item>

            <HBox.Item>
              <DetailButton
                text={strings.regular}
                color="accessoryBlue"
                onTap={() => moveCardOfPosition(MOVE_CARD_SEVENTH_POSITION)}
              />
            </HBox.Item>

            <HBox.Item>
              <DetailButton text={strings.easy} color="success" onTap={() => moveCardLastPosition()} />
            </HBox.Item>
          </HBox>
        </ButtonsDetailNextWrapper>
      </VBox>
    </>
  );
};
