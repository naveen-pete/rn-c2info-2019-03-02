import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from './Home';
import Settings from './Settings';

const AppNavigator = createStackNavigator(
   {
      Home: Home,
      Settings: Settings
   },
   {
      headerMode: 'none',
      navigationOptions: {
         headerVisible: false
      }
   }
);

export default createAppContainer(AppNavigator);
