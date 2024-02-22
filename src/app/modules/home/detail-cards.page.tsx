import React from 'react';
import { VBox, VSeparator } from '@atomic/obj.grid';
import { DeckCard } from '@app/components/atm.deck-card';

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
