import { useEffect, useState } from 'react';
import { useGetQuery } from '@app/core/axios';
import { DeckI } from '@app/model';

export const useDecksQuery = () => {
  const [decks, setDecks] = useState<DeckI[]>([]);
  const [amountDecks, setAmountDecks] = useState(0);

  const { data, error, loading, refetch } = useGetQuery<DeckI[]>('http://localhost:3000/decks');

  useEffect(() => {
    setDecks(data);
    setAmountDecks(data?.length);
  }, [data]);

  return { decks, amountDecks, error, loading, refetch };
};
