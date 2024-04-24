import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useGetQuery } from '@app/core/axios/axios-query.hook';
import { CardI } from '@app/model';

interface useGetCardsContextI {
  cards: CardI[];
  amountCardsGeneral: number;
  error?: Error;
  loading?: boolean;
  refetch?: () => void;
  cardsVisualized?: number;
}
interface useCardsQueryProps {
  children: ReactNode;
}

const GetCardsContext = createContext<useGetCardsContextI | undefined>(undefined);

export const GetCardsProvider = ({ children }: useCardsQueryProps) => {
  const [cards, setCards] = useState<CardI[]>([]);
  const [amountCardsGeneral, setAmountCards] = useState(0);
  const [cardsVisualized, setCardsVisualized] = useState(0);

  const { data, refetch, loading, error } = useGetQuery<CardI[]>('cards');

  useEffect(() => {
    const numberOfCardsGeneral = data?.length || 0;

    const amountCardsVisualized = data?.filter(item => {
      return item.visualized === true;
    });

    setCards(data);
    setAmountCards(numberOfCardsGeneral);
    setCardsVisualized(amountCardsVisualized?.length || 0);
  }, [data]);

  return (
    <GetCardsContext.Provider value={{ cards, amountCardsGeneral, cardsVisualized, refetch, error, loading }}>
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
