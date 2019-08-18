import React, { Component } from 'react';
import {
  FlatList,
  //RefreshControl,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import moment from 'moment';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { CreditCard } from '../components/CreditCard';

import { fetchLatestBalance } from '../actions/plaid.actions';

class ListScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'CardList',
    headerBackTitle: null,
    headerTitle: 'Credit Cards',
    headerTitleStyle: {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });

  // example data for now
  state = {
    example: [
      {
        "account_id": "6Nxq63B1KDSe3lBxp7L1fnWbNGLV4nQxclVdL",
        "balances": {
          "available": null,
          "current": 87.23,
          "limit": 4000,
          "iso_currency_code": "USD",
          "unofficial_currency_code": null,
        },
        "mask": "9808",
        "name": "Cash Rewards",
        "official_name": "Bank of America Cash Rewards",
        "subtype": "credit card",
        "type": "credit"
      },
      {
        "account_id": "6Myq63K1KDSe3lBwp7K1fnEbNGLV4nSxalVdW",
        "balances": {
          "available": null,
          "current": 151.21,
          "limit": null,
          "iso_currency_code": "USD",
          "unofficial_currency_code": null,
        },
        "mask": "3333",
        "name": "Gold Card",
        "official_name": "American Express Gold Card",
        "subtype": "credit card",
        "type": "credit"
      },
      {
        "account_id": "8Nxv42B9KDSe5lBxp6L1fnWbNGLV1nQxclWdL",
        "balances": {
          "available": null,
          "current": 101.15,
          "limit": 15000,
          "iso_currency_code": "USD",
          "unofficial_currency_code": null,
        },
        "mask": "4606",
        "name": "Sapphire Reserve",
        "official_name": "Chase Sapphire Reserve",
        "subtype": "credit card",
        "type": "credit"
      }
    ]
  };

  renderCreditCard = ({ item }) => {
    const { balances, mask, official_name } = item;
    const { current, limit } = balances;

    const cardNameStr = official_name;
    const endingWithStr = `(....${mask})`;
    const balanceStr = (limit === null)
      ? `$${current.toLocaleString()}`
      : `$${current.toLocaleString()} / $${limit.toLocaleString()}`;
    return (
      <CreditCard
        cardName={cardNameStr}
        endingWith={endingWithStr}
        balance={balanceStr}
      />
    );
  }

  renderSeparator = () => (
    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
      <View style={{ backgroundColor: '#758496', height: 1 }} />
    </View>
  );

  // The key expects a unique string, not a number
  _keyExtractor = (item, index) => index.toString();

  render() {
    // const { data } = this.props;
    const { example } = this.state;
    return (
      <Container>
        <View style={{ flexGrow: 1, justifyContent: 'flex-start' }}>
          <FlatList
            data={example}
            renderItem={this.renderCreditCard}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </Container>
    );
  }
}

propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = ({ plaidReducer }) => {
  const { isFetching, data } = plaidReducer;
  return {
    isFetching: isFetching,
    data: data,
  };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchLatestBalance,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);