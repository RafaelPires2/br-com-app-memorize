import React from 'react';

import { DeckCard } from '@app/components/atm.deck-card';
import { VBox, VSeparator } from '@atomic/obj.grid/grid.component';

export const DetailCardsPage = () => {
  return (
    <>
      <VSeparator />
      <VBox>
        <DeckCard title="Irregular Verbs" amountCards={6} onTap={() => console.log('click')} />
        <DeckCard title="Irregular Verbs" amountCards={6} onTap={() => console.log('click')} />
        <DeckCard title="Irregular Verbs" amountCards={6} onTap={() => console.log('click')} />
        <DeckCard title="Irregular Verbs" amountCards={6} onTap={() => console.log('click')} />
        <DeckCard title="Irregular Verbs" amountCards={6} onTap={() => console.log('click')} />
      </VBox>
    </>
  );
};
