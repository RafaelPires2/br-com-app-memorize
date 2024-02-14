import { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  home: undefined;
  account: undefined;
  newCard: undefined;
};

export type RootNavigationProp = NavigationProp<RootStackParamList>;
