import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../pages/Login/LoginScreen';

export const AuthNavigation = createStackNavigator(
  {
    Login: {screen: LoginScreen},
  },
  {
    initialRouteName: 'Login',
    headerMode:"none"
  },
);
