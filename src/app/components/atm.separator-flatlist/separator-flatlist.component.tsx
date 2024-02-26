import React from 'react';
import { appStrings } from '@app/app-strings';
import { Body } from '@atomic/atm.typography';
import { VSeparator } from '@atomic/obj.grid';

const strings = appStrings.homePage;

export const SeparatorFlatlist = () => {
  return (
    <>
      <VSeparator spacing="half" />
      <Body center>{strings.separatorFlatlist}</Body>
      <VSeparator spacing="double" />
      <VSeparator />
    </>
  );
};
