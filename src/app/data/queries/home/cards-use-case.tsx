import { CardI } from '@app/model';
import { useGetQuery } from '@app/core/axios/axios-query.hook';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface useGetCardsContextI {
  cards: CardI[];
  amountCardsGeneral: number;
  error?: Error;
  loading?: boolean;
  refetch?: () => void;
}
interface useCardsQueryProps {
  children: ReactNode;
}

const GetCardsContext = createContext<useGetCardsContextI | undefined>(undefined);

export const GetCardsProvider = ({ children }: useCardsQueryProps) => {
  const [cards, setCards] = useState<CardI[]>([]);
  const [amountCardsGeneral, setAmountCards] = useState(0);

  const { data, refetch, loading, error } = useGetQuery<CardI[]>('cards');

  useEffect(() => {
    const numberOfCardsGeneral = data?.length || 0;

    setCards(data);
    setAmountCards(numberOfCardsGeneral);
  }, [data]);

  return (
    <GetCardsContext.Provider value={{ cards, amountCardsGeneral, refetch, error, loading }}>
      {children}
    </GetCardsContext.Provider>
  );
};

export const useGetCardsContext = (): useGetCardsContextI => {
  const context = useContext(GetCardsContext);

  if (!context) {
    throw new Error('useGetCardsContext deve ser usado dentro de um GetCardsProvider');
  }
  return context;
};
