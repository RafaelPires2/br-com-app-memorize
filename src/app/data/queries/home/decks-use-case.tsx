import { useEffect, useState } from 'react';
import { useGetQuery } from '@app/core/axios';

export interface DeckType {
  id: string;
  title: string;
}

export const useDecksQuery = () => {
  const [decks, setDecks] = useState<DeckType[]>([]);
  const [amountDecks, setAmountDecks] = useState(0);

  const { data, error, loading, refetch } = useGetQuery<DeckType[]>('http://localhost:3000/decks');

  useEffect(() => {
    setDecks(data);
    setAmountDecks(data?.length);
  }, [data]);

  return { decks, amountDecks, error, loading, refetch };
};
