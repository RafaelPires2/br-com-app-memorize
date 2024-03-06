import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Divider } from '@atomic/atm.divider';
import { appStrings } from '@app/app-strings';
import { Checkbox } from 'react-native-paper';
import { commonTheme } from '@atomic/obj.theme';
import { HBox, VSeparator } from '@atomic/obj.grid';
import { H1, H2, H3 } from '@atomic/atm.typography';
import { Button } from '@app/components/atm.button';
import { useDecksQuery } from '@app/data/queries/home';
import { CheckBoxWrapper } from './add-new-card-styles';
import { CheckBoxCircleStyle } from '@app/components/atm.check-box';
import { SelectDropdownButton } from '@app/components/atm.select-button';
import { BoxInputTextStyle, InputTextStyle } from '@app/components/atm.input-text';

const theme = commonTheme;
const strings = appStrings.newCardPage;

export const AddNewCard = () => {
  const { decks } = useDecksQuery();
  const [checkedNewCard, setCheckedNewCard] = useState(true);
  const [textState, setTextState] = useState({ deck: '', frontCard: '', backCard: '' });

  const onChangeTextState = (key: string, value: string) => {
    setTextState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const onPressSubmit = () => {
    console.log('State:', textState);
  };

  return (
    <>
      <H1 center>{strings.isNewDeck}</H1>
      <VSeparator />

      <View style={{ alignItems: 'center' }}>
        <CheckBoxWrapper>
          <HBox.Item vAlign="center" wrap>
            <CheckBoxCircleStyle>
              <Checkbox
                color={theme.color.secondaryDark}
                status={checkedNewCard ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckedNewCard(!checkedNewCard);
                }}
              />
            </CheckBoxCircleStyle>
          </HBox.Item>
          <HBox.Separator spacing="half" />
          <HBox.Item vAlign="center" hAlign="flex-start">
            <H3 center>{strings.checkYes}</H3>
          </HBox.Item>
          <HBox.Separator />

          <HBox.Item vAlign="center" wrap>
            <CheckBoxCircleStyle>
              <Checkbox
                color={theme.color.secondaryDark}
                status={!checkedNewCard ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckedNewCard(!checkedNewCard);
                }}
              />
            </CheckBoxCircleStyle>
          </HBox.Item>
          <HBox.Separator spacing="half" />
          <HBox.Item vAlign="center" hAlign="flex-start">
            <H3 center>{strings.checkNo}</H3>
          </HBox.Item>
        </CheckBoxWrapper>
      </View>

      <VSeparator />
      <Divider />
      <VSeparator />
      <ScrollView>
        {checkedNewCard ? (
          <>
            <H2>{strings.nameNewDeck}</H2>
            <InputTextStyle
              placeholderTextColor={theme.color.grayMedium}
              onChangeText={text => onChangeTextState('deck', text)}
              value={textState.deck}
              placeholder={strings.placeholderDeck}
            />
          </>
        ) : (
          <>
            <H2>{strings.changeDeck}</H2>
            <SelectDropdownButton data={decks} onTap={onChangeTextState} />
          </>
        )}
        <>
          <VSeparator />

          <H3 mb>{strings.front}</H3>
          <BoxInputTextStyle
            placeholderTextColor={theme.color.grayMedium}
            onChangeText={text => onChangeTextState('frontCard', text)}
            value={textState.frontCard}
            placeholder={strings.placeholderFront}
            multiline={true}
            textAlignVertical="top"
          />

          <VSeparator />

          <H3 mb>{strings.response}</H3>
          <BoxInputTextStyle
            placeholderTextColor={theme.color.grayMedium}
            onChangeText={text => onChangeTextState('backCard', text)}
            value={textState.backCard}
            placeholder={strings.placeholderResponse}
            multiline={true}
            textAlignVertical="top"
          />

          <VSeparator spacing="double" />
          <Button.CallToAction text={appStrings.button.send} onTap={() => console.log('foi')} />
        </>
      </ScrollView>
    </>
  );
};
