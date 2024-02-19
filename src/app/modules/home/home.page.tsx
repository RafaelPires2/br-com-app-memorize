import React from 'react';
import { VBox, VSeparator } from '@atomic/obj.grid';
import { DeckCard } from '@app/components/atm.deck-card';

// TODO: Criar sombra para os cards
// TODO: Refatorar tabs e stacks
// TODO: Usar Json Server para api
// TODO: Flatlist na home

export const HomePage = () => {
  return (
    <>
      <VSeparator />
      <VBox>
        <DeckCard title="Irregular Verbs" onTap={() => console.log('click')} />
      </VBox>
    </>
  );
};
