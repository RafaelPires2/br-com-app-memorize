import React from 'react';
import { appStrings } from '@app/app-strings';
import { commonTheme } from '@atomic/obj.theme';
import { DeckType } from '@app/data/queries/home';
import { Feather } from 'react-native-vector-icons';
import SelectDropdown from 'react-native-select-dropdown';

interface SelectDropdownButtonProps {
  data: DeckType[];
  onTap: (key: string, value: string) => void;
}

const strings = appStrings.newCardPage;

const SIZE_SELECT = 14;
const theme = commonTheme;
const BORDER_RADIUS_SELECT = 6;

export const SelectDropdownButton = ({ data, onTap }: SelectDropdownButtonProps) => {
  return (
    <SelectDropdown
      data={data.map(deck => deck.title)}
      defaultButtonText={strings.selectDeck}
      buttonStyle={{
        width: '100%',
        height: theme.button.height,
        borderRadius: BORDER_RADIUS_SELECT,
        backgroundColor: theme.color.grayXLight,
        borderColor: theme.color.gray,
        borderStyle: 'solid',
        borderWidth: 1,
      }}
      buttonTextStyle={{
        color: theme.color.grayDark,
        fontSize: SIZE_SELECT,
        alignItems: 'flex-start',
        textAlign: 'left',
      }}
      onSelect={selectedItem => {
        onTap('deck', selectedItem);
      }}
      buttonTextAfterSelection={selectedItem => {
        return selectedItem;
      }}
      rowTextForSelection={item => {
        return item;
      }}
      renderDropdownIcon={() => <Feather name="arrow-down" size={theme.iconSize.small} color={theme.color.gray} />}
    />
  );
};
