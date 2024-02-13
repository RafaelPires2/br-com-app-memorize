import { HomePage } from '@app/modules/home';
import { NewCard } from '@app/modules/new-card';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="homePage">
      <Stack.Screen name="newCard" component={NewCard} options={{ animation: 'none' }} />

      <Stack.Screen name="homePage" component={HomePage} />
    </Stack.Navigator>
  );
};
