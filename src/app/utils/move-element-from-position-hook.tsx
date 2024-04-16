import { CardI } from '@app/model';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

// 1- Criar um localStorage, metodos get, set, update, remove
// 2- buscar os cards do banco e armazenar no storage
// 3- Quando adicionar um card, atualizar o storage também

interface useMoveElementFromPositionProps {
  array: CardI[];
}

export function useMoveElementFromPosition({ array }: useMoveElementFromPositionProps) {
  const [cardsArray, setArray] = useState(array);

  const findFirstCard = cardsArray.find(card => card);

  // TODO: Salvar o array no storage

  // TODO: Alterar o array no back de uma unica vez, alterar quando tiver api.

  const handleUpdateCards = newCardArray => {
    axios.put(`http://localhost:3000/cards`, newCardArray);
  };

  const handleSetStateVisualizedCard = () => {
    const updatedCard = {
      ...findFirstCard,
      visualized: true,
    };

    axios.put(`http://localhost:3000/cards/${findFirstCard.id}`, updatedCard);
  };

  const moveCardOfPosition = (indexForMove: number) => {
    const elementRemoved = cardsArray.shift();

    const newArray = [...cardsArray.slice(0, indexForMove), elementRemoved, ...cardsArray.slice(indexForMove)];

    setArray(newArray);
    handleUpdateCards(newArray);
    handleSetStateVisualizedCard();
  };

  const moveCardLastPosition = () => {
    const elementRemoved = cardsArray.shift();

    const newArray = [...cardsArray, elementRemoved];

    setArray(newArray);
    handleUpdateCards(newArray);
    handleSetStateVisualizedCard();
  };

  return {
    moveCardOfPosition,
    moveCardLastPosition,
    findFirstCard,
  };
}
