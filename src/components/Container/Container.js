import React from "react";
import { SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Container = ({ children }) => (
  <SafeAreaView style={styles.container}>
    {children}
  </SafeAreaView>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;