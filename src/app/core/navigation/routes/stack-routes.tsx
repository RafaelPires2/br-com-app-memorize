import { HomePage } from '@app/modules/home';
import { NewCard } from '@app/modules/new-card';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="home-page">
      <Stack.Screen name="new-card" component={NewCard} />

      <Stack.Screen name="home-page" component={HomePage} />
    </Stack.Navigator>
  );
};
