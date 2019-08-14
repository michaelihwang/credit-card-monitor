import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation';

import ExampleScreen from '../screens/ExampleScreen';

const HomeStack = createStackNavigator({
  Home: ExampleScreen
});

const AppContainer = createAppContainer(HomeStack);

export default AppContainer;