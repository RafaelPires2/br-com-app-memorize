import { CardI } from '@app/model';
import { useEffect, useState } from 'react';
import { useGetQuery } from '@app/core/axios/axios-query.hook';

export const useCardsQuery = () => {
  const [cards, setCards] = useState<CardI[]>([]);
  const [amountCardsGeneral, setAmountCards] = useState(0);

  const { data, refetch } = useGetQuery<CardI[]>('http://localhost:3000/cards');

  useEffect(() => {
    const numberOfCardsGeneral = data?.length || 0;

    setCards(data);
    setAmountCards(numberOfCardsGeneral);
  }, [data]);

  return { cards, amountCardsGeneral, refetch };
};
