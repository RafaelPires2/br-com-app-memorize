import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

interface QueryResult<TData> {
  data: TData;
  loading: boolean;
  error: Error | null;
  refetch?: () => void;
}

export function useGetQuery<TData = any>(url: string): QueryResult<TData> {
  const [data, setData] = useState<TData | null>();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [trigger, setTrigger] = useState<number>(0);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(`http://localhost:3000/${url}`);
      setError(null);
      setData(response.data);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [url, trigger]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = () => {
    setTrigger(prev => prev + 1);
  };

  return { data, error, loading, refetch };
}
