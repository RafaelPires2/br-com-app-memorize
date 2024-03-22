import { UserI } from '@app/model';
import { useEffect, useState } from 'react';
import { useGetQuery } from '@app/core/axios/axios-query.hook';
interface UserProps {
  idUser: string;
}

export const useUserQuery = ({ idUser }: UserProps) => {
  const [user, setUser] = useState<UserI>();

  const { data, refetch } = useGetQuery<UserI[]>(`users?id=${idUser}`);

  useEffect(() => {
    const currentUser = data?.find(u => u.id === idUser);
    setUser(currentUser);
  }, [data]);

  return { user, refetch };
};
