import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  homeRoutes: undefined;
  accountRoutes: undefined;
  newCard: undefined;
  detailCardsPage: { title: string };
};

export type RootNavigationProp = NavigationProp<RootStackParamList>;
