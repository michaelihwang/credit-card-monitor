import React, { Component } from 'react';
import {
  Image,
  Modal,
  StatusBar,
  Text,
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from '../../components/Container';
import { PlaidWebView } from '../../components/PlaidWebView';

import { sendPublicToken } from '../../actions/plaid.actions';

import styles from './styles';

const PUBLIC_KEY = '346c10c4f03aecdf08405e69833a5e';
const API_ENV = 'sandbox';
const API_PRODUCT = ['transactions'];
const APP_NAME = 'Credit Card Monitor App';

class LinkScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerBackTitle: null,
    headerTitle: 'Plaid Link',
    headerTitleStyle: {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });

  state = {
    showPlaidModal: false
  };

  onMessage = (data) => {
    const { action, eventName, metadata } = data;
    let connectRes = action.substr(action.lastIndexOf(':') + 1).toUpperCase();
    if (eventName === 'EXIT') {
      this.setState({
        showPlaidModal: false,
      });
    } else if (connectRes === 'CONNECTED') {
      const { public_token } = metadata;
      this.setState({
        showPlaidModal: false,
      });

      const { sendPublicToken } = this.props;
      sendPublicToken(public_token);
    }
  };

  render() {
    const { showPlaidModal } = this.state;
    return (
      <Container>
        <ScrollView contentContainerStyle={styles.pageContainer}>
          <Modal
            animationType={'slide'}
            visible={showPlaidModal}
            transparent={false}
          >
            <StatusBar barStyle='dark-content' />
            <PlaidWebView
              publicKey={PUBLIC_KEY}
              env={API_ENV}
              product={API_PRODUCT}
              clientName={APP_NAME}
              onMessage={this.onMessage}
            />
          </Modal>
          <Image
            source={{ uri: 'https://blog.plaid.com/content/images/2019/03/small-logo-text.png' }}
            style={styles.logoContainer}
            reSizeMode={'contain'}
          />
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyText}>
              Connect your Banks to monitor your Credit Card balances!
            </Text>
            <TouchableHighlight
              onPress={() => this.setState({ showPlaidModal: true })}
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonText}>Add Bank</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  sendPublicToken: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    sendPublicToken,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(LinkScreen);