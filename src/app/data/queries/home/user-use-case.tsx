import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface UserType {
  id: string;
  name: string;
  email: string;
}

interface UserProps {
  idUser: string;
}

// TODO: Fazer hook para o axios.get

export const useUserQuery = ({ idUser }: UserProps) => {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<UserType[]> = await axios.get(`http://localhost:3000/users?id=${idUser}`);
        const data = response.data;
        const currentUser = data.find(u => u.id === idUser);

        setUser(currentUser);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { user };
};
