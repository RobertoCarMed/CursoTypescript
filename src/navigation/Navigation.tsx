import { createStackNavigator } from '@react-navigation/stack';
import { Movie } from '../interfaces/movieInterface';
import { DetailScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/HomeScreen';

export type RootStackParams = {
  HomeScreen: undefined,
  DetailsScreen: Movie 
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          // backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
} 