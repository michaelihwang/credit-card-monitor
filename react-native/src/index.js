import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
  $lightGray: '#F2F3F7',
  $medGray: '#758496',
  $darkGray: '#343434',
});

export default () => (
  <Provider store={store}>
    <Navigator onNavigationStateChange={null} />
  </Provider>
);