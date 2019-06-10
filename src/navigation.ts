import { createStackNavigator } from 'react-navigation';

import { MainScreen } from './screens/MainScreen';
import { SecondScreen } from './screens/SecondScreen';

export const AppNavigation = createStackNavigator(
    {
        Home: MainScreen,
        Second: SecondScreen,
    },
    {
        initialRouteName: 'Home'
    }
);
