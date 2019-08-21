import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class CreditCard extends Component {
  renderTopBlock = () => {
    const { name, mask } = this.props;
    const cardNameStr = name;
    const endingWithStr = `(....${mask})`;
    return (
      <View style={styles.topBlock}>
        <Text style={styles.cardNameText}>{cardNameStr}</Text>
        <Text style={styles.endingWithText}>{endingWithStr}</Text>
      </View>
    );
  }

  renderBottomBlock = () => {
    const { current, limit } = this.props;
    const currentStr = `$${current.toLocaleString(undefined, {
      'minimumFractionDigits': 2,
      'maximumFractionDigits': 2
    })}`;
    const limitStr = `$${limit.toLocaleString(undefined, {
      'minimumFractionDigits': 2,
      'maximumFractionDigits': 2
    })}`;
    return (
      <View style={styles.bottomBlock}>
        <Text style={styles.balanceText}>
          {`${currentStr} / ${limitStr}`}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.leftBlock}>
          <Image
            source={require('../../../assets/credit-card-placeholder.png')}
            style={styles.iconContainer}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.rightBlock}>
          {this.renderTopBlock()}
          {this.renderBottomBlock()}
        </View>
      </View>
    );
  }
}

propTypes = {
  name: PropTypes.string,
  mask: PropTypes.string,
  current: PropTypes.num,
  limit: PropTypes.num
};

export default CreditCard;