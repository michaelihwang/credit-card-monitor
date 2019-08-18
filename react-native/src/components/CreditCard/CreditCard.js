import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';

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
    const { current, limit } = this.props;
    return (
      <View style={styles.rightBlock}>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>{
            `$${current.toLocaleString()} / $${limit.toLocaleString()}`
          }</Text>
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

propTypes = {
  cardName: PropTypes.string,
  endingWith: PropTypes.string,
  current: PropTypes.number,
  limit: PropTypes.number
};

export default CreditCard;