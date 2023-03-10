import HomeScreen from '../pages/HomeScreen';
import DetailScreen from '../pages/DetailScreen';
import {createStackNavigator} from 'react-navigation-stack';


export const AppNavigation = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Detail: {screen: DetailScreen},
  },
  {
    initialRouteName: 'Home',
    headerMode:'none'
  },
);
