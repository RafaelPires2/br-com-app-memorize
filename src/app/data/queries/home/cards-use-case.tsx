import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export interface CardType {
  id: string;
  front: string;
  back: string;
  idDeck: string;
}

export const useCardsQuery = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [amountCardsGeneral, setAmountCards] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<CardType[]> = await axios.get('http://localhost:3000/cards');
        const data = response?.data;

        const numberOfCardsGeneral = data?.length;

        setCards(data);
        setAmountCards(numberOfCardsGeneral);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { cards, amountCardsGeneral };
};
