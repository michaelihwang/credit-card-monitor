import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import CardListScreen from '../screens/CardListScreen';
import LinkScreen from '../screens/LinkScreen';

import { Ionicons } from '@expo/vector-icons';

const CardListStack = createStackNavigator({
  CardList: CardListScreen
});

const LinkStack = createStackNavigator({
  Linker: LinkScreen
});

const TabNavigator = createBottomTabNavigator({
  CardList: {
    screen: CardListStack
  },
  Linker: {
    screen: LinkStack
  }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let icon;
        switch (routeName) {
          case 'CardList':
            icon = 'ios-list';
            break;
          case 'Linker':
            icon = 'ios-person';
            break;
        }

        return <Ionicons name={icon} size={25} color={tintColor} />;
      }
    }),
    initialRouteName: 'CardList',
    tabBarOptions: {
      activeTintColor: 'black',
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: 'white',
        paddingTop: 10
      }
    }
  });

TabNavigator.navigationOptions = {
  // Hide the header from TabNavigator
  header: null,
};

const MainStack = createStackNavigator({
  // Routes you want to render above the tab bar
  TabScreens: TabNavigator,
}, {
    initialRouteName: 'TabScreens',
    headerMode: 'none'
  });

const AppContainer = createAppContainer(MainStack);

export default AppContainer;