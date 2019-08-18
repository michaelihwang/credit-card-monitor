import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation';

// import CardListScreen from '../screens/CardListScreen';
import PlaidLinkScreen from '../screens/PlaidLinkScreen';

/*
const CardListStack = createStackNavigator({
  List: CardListScreen
});
*/

const PlaidLinkStack = createStackNavigator({
  Linker: PlaidLinkScreen
});

const AppContainer = createAppContainer(PlaidLinkStack);

export default AppContainer;