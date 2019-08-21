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
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container } from '../components/Container';
import { PlaidWebView } from '../components/PlaidWebView';

import { sendPublicToken } from '../actions/plaid.actions';

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

const styles = EStyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logoContainer: {
    flex: 1,
    width: 256,
    height: 256
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    backgroundColor: '$plaidBlue',
    borderColor: '$plaidBlue',
    borderRadius: 5,
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset: {
      width: 0.5,
      height: 0.5
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    width: 200,
    height: 50
  },
  bodyText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});

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