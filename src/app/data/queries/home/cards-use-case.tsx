import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useGetQuery } from '@app/core/axios/axios-query.hook';

export interface CardType {
  id: string;
  front: string;
  back: string;
  idDeck: string;
}

export const useCardsQuery = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [amountCardsGeneral, setAmountCards] = useState(0);

  const { data } = useGetQuery<CardType[]>('http://localhost:3000/cards');

  useEffect(() => {
    const numberOfCardsGeneral = data?.length || 0;

    setCards(data);
    setAmountCards(numberOfCardsGeneral);
  }, [data]);

  return { cards, amountCardsGeneral };
};
