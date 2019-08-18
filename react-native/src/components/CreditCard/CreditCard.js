import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './styles';

class CreditCard extends Component {
  renderLeftBlock = () => {
    const { cardName, endingWith } = this.props;
    return (
      <View style={styles.leftBlock}>
        <View style={styles.cardNameContainer}>
          <Text style={styles.cardNameText}>{cardName}</Text>
          <Text style={styles.endingWithText}>{endingWith}</Text>
        </View>
      </View>
    );
  }

  renderRightBlock = () => {
    const { balance } = this.props;
    return (
      <View style={styles.rightBlock}>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>{balance}</Text>
        </View>
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

export default CreditCard;