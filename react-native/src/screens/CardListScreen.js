import React, { Component } from 'react';
import {
  Alert,
  FlatList,
  RefreshControl,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

  handlePullToRefresh = () => {
    const { access_token, fetchLatestBalance } = this.props;
    console.log('------------------- access_token:', access_token);
    (access_token !== 'null') ? fetchLatestBalance(access_token) : Alert.alert(
      'public_token missing',
      'Authenticate Plaid Link',
      { cancelable: false },
    );
  }

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
    const { isFetching, accounts } = this.props;
    return (
      <Container>
        <View style={{ flexGrow: 1, justifyContent: 'flex-start' }}>
          <FlatList
            data={accounts}
            refreshControl={
              <RefreshControl
                refreshing={isFetching}
                onRefresh={this.handlePullToRefresh}
              />
            }
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
  isFetching: PropTypes.bool,
  access_token: PropTypes.string,
  accounts: PropTypes.array,
};

const mapStateToProps = ({ plaidReducer }) => {
  const { isFetching, access_token, accounts } = plaidReducer;
  return {
    isFetching,
    access_token,
    accounts,
  };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchLatestBalance,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);