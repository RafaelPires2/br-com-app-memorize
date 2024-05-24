import { DetailCardsPageRouteProp, RootNavigationProp } from '@app/core/navigation/routes/navigation-types';
import { ButtonDetailWrapper, ButtonsDetailNextWrapper, DetailButton } from './components/detail-button';
import { useMoveElementFromPosition } from '@app/utils/move-element-from-position-hook';
import { ReturnButton } from '@atomic/mol.close-button/return-button-component';
import { HBox, VBox, VSeparator } from '@atomic/obj.grid/grid.component';
import { BoxTextDetailStyles } from './components/box-text-detail';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LocalDataSource } from '@app/data/local/local.datasource';
import { useGetCardsContext } from '@app/data/queries/home';
import { HeaderStyles } from '@app/components/atm.header';
import { Body, H1, H2 } from '@atomic/atm.typography';
import { Button } from '@app/components/atm.button';
import { commonTheme } from '@atomic/obj.theme';
import { appStrings } from '@app/app-strings';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const strings = appStrings.detailPage;
const theme = commonTheme;

const MOVE_CARD_SECOND_POSITION = 1;
const MOVE_CARD_FOURTH_POSITION = 3;
const MOVE_CARD_SEVENTH_POSITION = 6;
const PADDING_TITLE = 50;
const TRASH_ICON_SIZE = 24;

export const DetailCardsPage = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [toggleCard, setToggleCard] = useState(true);

  const { cards, refetch } = useGetCardsContext();

  // TODO: Adicionar estado de vazio na pagina de detalhes quando não houver card
  // TODO: Adicionar opção de deletar card
  // TODO: Adicionar opção de deletar deck

  // TODO: Criar pagina minha conta.
  // TODO: Criar página de login
  // TODO: Criar página de criação de conta
  // TODO: Criar página de esqueci minha senha

  // QUERO ARMAZENAR UM ARRAY DE CARDS DENTRO DO STORAGE

  const route = useRoute<DetailCardsPageRouteProp>();
  const { title } = route.params;

  const findCardsFromDeck = cards?.filter(item => {
    if (item.deckTitle === title) {
      LocalDataSource.set('arrayCards', item);
      return item;
    }
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const arrayCards = await LocalDataSource.get('arrayCards');
  //       console.log('arrayCards: ', arrayCards);
  //     } catch (error) {
  //       console.error('Error fetching arrayCards:', error);
  //     }
  //   };

  //   fetchData();
  // }, [findCardsFromDeck]);

  const { findFirstCard, moveCardOfPosition, moveCardLastPosition } = useMoveElementFromPosition({
    array: findCardsFromDeck,
  });

  const handleRemoveCard = async () => {
    await axios
      .delete(`http://localhost:3000/cards/${findFirstCard.id}`)
      .then(response => {
        refetch();
        console.log(response.status);
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <HeaderStyles>
        <HBox>
          <HBox.Item vAlign="center" wrap>
            <ReturnButton whiteIconButton onTap={() => navigation.goBack()} />
          </HBox.Item>
          <HBox.Item vAlign="center" hAlign="center" style={{ paddingRight: PADDING_TITLE }}>
            <H2 color="white">{title}</H2>
          </HBox.Item>
        </HBox>
      </HeaderStyles>

      <VSeparator />

      <VBox hAlign="center">
        <H1>{toggleCard ? strings.front : strings.back}</H1>

        <VSeparator />

        <BoxTextDetailStyles>
          <ScrollView>
            <Body center>{toggleCard ? findFirstCard?.front : findFirstCard?.back}</Body>
          </ScrollView>

          <Feather
            onPress={() => handleRemoveCard()}
            style={{ alignSelf: 'flex-end' }}
            name="trash-2"
            size={TRASH_ICON_SIZE}
            color={theme.color.gray}
          />
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
                onTap={() => {
                  moveCardOfPosition(MOVE_CARD_SECOND_POSITION), setToggleCard(true);
                }}
              />
            </HBox.Item>

            <HBox.Item>
              <DetailButton
                text={strings.hard}
                color="accessoryOrange"
                onTap={() => {
                  moveCardOfPosition(MOVE_CARD_FOURTH_POSITION), setToggleCard(true);
                }}
              />
            </HBox.Item>

            <HBox.Item>
              <DetailButton
                text={strings.regular}
                color="accessoryBlue"
                onTap={() => {
                  moveCardOfPosition(MOVE_CARD_SEVENTH_POSITION), setToggleCard(true);
                }}
              />
            </HBox.Item>

            <HBox.Item>
              <DetailButton
                text={strings.easy}
                color="success"
                onTap={() => {
                  moveCardLastPosition(), setToggleCard(true);
                }}
              />
            </HBox.Item>
          </HBox>
        </ButtonsDetailNextWrapper>
      </VBox>
    </>
  );
};
