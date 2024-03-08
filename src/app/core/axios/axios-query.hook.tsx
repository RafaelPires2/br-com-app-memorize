import axios from 'axios';
import { useEffect, useState } from 'react';

interface QueryResult<TData> {
  data: TData;
  loading: boolean;
  error: boolean;
  errorMessage: string;
  refetch?: () => void;
}

export function useGetQuery<TData = any>(url: string): QueryResult<TData> {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [refetchState, setRefetchState] = useState(false);

  const refetch = () => {
    setRefetchState(!refetchState);
  };

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setError(false);
        setData(response.data);
      } catch (error) {
        setError(true);
        setErrorMessage(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refetchState]);

  return { data, error, loading, refetch, errorMessage };
}
