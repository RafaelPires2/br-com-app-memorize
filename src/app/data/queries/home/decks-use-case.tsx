import { DeckI } from '@app/model';
import { useGetQuery } from '@app/core/axios';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface useGetDecksContextI {
  decks: DeckI[];
  amountDecks: number;
  error: Error;
  loading: boolean;
  refetch: () => void;
}
interface useDecksQueryProps {
  children: ReactNode;
}

const GetDecksContext = createContext<useGetDecksContextI | undefined>(undefined);

export function GetDecksProvider({ children }: useDecksQueryProps) {
  const { data, error, loading, refetch } = useGetQuery<DeckI[]>('decks');

  const [decks, setDecks] = useState<DeckI[]>([]);
  const [amountDecks, setAmountDecks] = useState(0);

  useEffect(() => {
    setDecks(data);
    setAmountDecks(data ? data?.length : 0);
  }, [data]);

  return (
    <GetDecksContext.Provider value={{ decks, amountDecks, error, loading, refetch }}>
      {children}
    </GetDecksContext.Provider>
  );
}

export const useGetDecksContext = (): useGetDecksContextI => {
  const context = useContext(GetDecksContext);

  if (!context) {
    throw new Error('useGetDecksContext deve ser usado dentro de um GetDecksProvider');
  }
  return context;
};
