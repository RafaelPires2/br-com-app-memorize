import AsyncStorage from '@react-native-async-storage/async-storage';

const safeSaveInAsyncStorage = async <T>(key: string, value: T): Promise<T> => {
  if (key === undefined || value === undefined) {
    throw new Error('undefined key or value');
  }
  await AsyncStorage.setItem(key, JSON.stringify(value));
  return value;
};

export const LocalDataSource = {
  set: <T>(key: string, value: T): Promise<T> => {
    return safeSaveInAsyncStorage(key, value);
  },

  get: async <T>(key: string): Promise<T> => {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  },

  remove: (key: string): Promise<void> => {
    return AsyncStorage.removeItem(key);
  },
};
