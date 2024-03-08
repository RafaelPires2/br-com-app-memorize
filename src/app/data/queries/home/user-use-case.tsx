import { useEffect, useState } from 'react';
import { useGetQuery } from '@app/core/axios/axios-query.hook';

interface UserType {
  id: string;
  name: string;
  email: string;
}

interface UserProps {
  idUser: string;
}

export const useUserQuery = ({ idUser }: UserProps) => {
  const [user, setUser] = useState<UserType>();

  const { data } = useGetQuery<UserType[]>(`http://localhost:3000/users?id=${idUser}`);

  useEffect(() => {
    const currentUser = data?.find(u => u.id === idUser);
    setUser(currentUser);
  }, [data]);

  return { user };
};
