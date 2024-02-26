import axios from 'axios';
import { useEffect, useState } from 'react';

export interface DeckType {
  id: string;
  title: string;
}

export const useDecksQuery = () => {
  const [decks, setDecks] = useState<DeckType[]>([]);
  const [amountDecks, setAmountDecks] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/decks');
        const data = response?.data;

        setDecks(data);
        setAmountDecks(data?.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { decks, amountDecks };
};
