import axios, { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';

interface PostResult<TData> {
  loading: boolean;
  data: TData | null;
  error: Error | null;
}

interface PostOptions<TData> {
  onCompleted?: (data: TData) => void;
  onError?: (error: Error | null) => void;
}

type OperationVariables = Record<string, any>;

export type MutationTuple<TData, TVariables> = [(variables?: TVariables) => void, PostResult<TData>];

export function useAxiosPost<TData = any, TVariables = OperationVariables>(
  url: string,
  options: PostOptions<TData>,
): MutationTuple<TData, TVariables> {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const axiosPost = useCallback(
    async (variables: PostOptions<TVariables>) => {
      setLoading(true);

      try {
        const response: AxiosResponse<TData> = await axios.post(`http://localhost:3000/${url}`, variables);
        setData(response.data);
        if (options.onCompleted) {
          options.onCompleted(response.data);
        }
      } catch (err) {
        setError(err);
        if (options.onError) {
          options.onError(err);
        }
      } finally {
        setLoading(false);
      }
    },
    [url],
  );

  return [axiosPost, { data, error, loading }];
}
