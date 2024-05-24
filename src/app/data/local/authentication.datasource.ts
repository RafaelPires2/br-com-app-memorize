import { LocalDataSource } from './local.datasource';

const LocalDataSourceKeys = {
  token: 'token',
};

export const AuthenticationLocalStorageDataSource = {
  getToken: (): Promise<string> => {
    return LocalDataSource.get<string>(LocalDataSourceKeys.token);
  },
  setToken: async (token: string): Promise<void> => {
    await LocalDataSource.set<string>(LocalDataSourceKeys.token, token);
  },
  removeToken: () => {
    return LocalDataSource.remove(LocalDataSourceKeys.token);
  },
};
