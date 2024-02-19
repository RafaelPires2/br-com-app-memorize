import { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  homeRoutes: undefined;
  accountRoutes: undefined;
  newCard: undefined;
  detailCardsPage: undefined;
};

export type RootNavigationProp = NavigationProp<RootStackParamList>;
