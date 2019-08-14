import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';

EStyleSheet.build({
  $lightGray: '#F2F3F7',
  $medGray: '#758496',
  $darkGray: '#343434',
});

export default () => (
  <Navigator onNavigationStateChange={null} />
);