import { CheckBoxWrapper } from '../atm.new-decks-and-cards-form/add-new-card-styles';
import { CheckBoxCircleStyle } from '@app/components/atm.check-box';
import { commonTheme } from '@atomic/obj.theme';
import { appStrings } from '@app/app-strings';
import { Checkbox } from 'react-native-paper';
import { H3 } from '@atomic/atm.typography';
import { HBox } from '@atomic/obj.grid';
import { View } from 'react-native';
import React from 'react';

interface CheckBoxDecksProps {
  checkedNewCard: boolean;
  setCheckedNewCard: React.Dispatch<React.SetStateAction<boolean>>;
  reset: () => void;
}

const theme = commonTheme;
const strings = appStrings.newCardPage;

export const CheckBoxDecks = ({ checkedNewCard, setCheckedNewCard, reset }: CheckBoxDecksProps) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <CheckBoxWrapper>
        <HBox.Item vAlign="center" wrap>
          <CheckBoxCircleStyle>
            <Checkbox
              color={theme.color.secondaryDark}
              status={checkedNewCard ? 'checked' : 'unchecked'}
              onPress={() => {
                reset();
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
                reset();
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
  );
};
