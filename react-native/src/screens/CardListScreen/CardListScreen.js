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

import { Container } from '../../components/Container';
import { CreditCard } from '../../components/CreditCard';

import { fetchLatestBalance } from '../../actions/plaid.actions';

import styles from './styles';

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

  componentDidUpdate(prevProps) {
    const { access_token, fetchLatestBalance } = this.props;
    if (access_token !== 'null' && prevProps.access_token === 'null') {
      fetchLatestBalance(access_token);
    }
  }

  handlePullToRefresh = () => {
    const { access_token, fetchLatestBalance } = this.props;
    (access_token !== 'null') ? fetchLatestBalance(access_token) : Alert.alert(
      'public_token missing',
      'Authenticate Plaid Link',
      { cancelable: false },
    );
  }

  renderCreditCard = ({ item }) => {
    const { balances, mask, name } = item;
    const { current, limit } = balances;
    return (
      <CreditCard
        name={name}
        mask={mask}
        current={current}
        limit={limit}
      />
    );
  }

  renderSeparator = () => (
    <View style={{ paddingHorizontal: 10 }}>
      <View style={styles.separator} />
    </View>
  );

  // The key expects a unique string, not a number
  _keyExtractor = (item, index) => index.toString();

  render() {
    const { isFetching, accounts } = this.props;
    return (
      <Container>
        <View style={styles.listContainer}>
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
  fetchLatestBalance: PropTypes.func,
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