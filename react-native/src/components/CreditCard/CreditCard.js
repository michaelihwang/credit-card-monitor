import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class CreditCard extends Component {
  renderLeftBlock = () => {
    const { cardName, balance } = this.props;
    return (
      <View style={styles.leftBlock}>
        <Text style={styles.cardNameText}>{cardName}</Text>
        <Text style={styles.balanceText}>{balance}</Text>
      </View>
    );
  }

  renderRightBlock = () => {
    const { endingWith } = this.props;
    return (
      <View style={styles.rightBlock}>
        <Text style={styles.endingWithText}>{endingWith}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.cardContainer}>
        {this.renderLeftBlock()}
        {this.renderRightBlock()}
      </View>
    );
  }
}

propTypes = {
  cardName: PropTypes.string,
  endingWith: PropTypes.string,
  balance: PropTypes.string
};

export default CreditCard;