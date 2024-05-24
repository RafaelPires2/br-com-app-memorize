import { NavigationProp, RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  homeRoutes: undefined;
  accountRoutes: undefined;
  newCard: undefined;
  detailCardsPage: { title: string };
};

export type DetailCardsPageRouteProp = RouteProp<RootStackParamList, 'detailCardsPage'>;

export type RootNavigationProp = NavigationProp<RootStackParamList>;
