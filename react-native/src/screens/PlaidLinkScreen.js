import React, { Component } from 'react';
import {
  Modal,
  StatusBar,
  Text,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container } from '../components/Container';
import { PlaidWebView } from '../components/PlaidWebView';

import { sendPublicToken } from '../actions/plaid.actions';

const PUBLIC_KEY = '346c10c4f03aecdf08405e69833a5e';
const API_ENV = 'sandbox';
const API_PRODUCT = ['transactions'];
const APP_NAME = 'Example Inc';

class ExampleScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerBackTitle: null,
    headerTitle: 'Plaid Link Example',
    headerTitleStyle: {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });

  state = {
    showPlaidModal: false,
    status: '',
    data: {}
  };

  onMessage = (data) => {
    const { action, eventName } = data;
    let connectionResponse = action.substr(action.lastIndexOf(':') + 1).toUpperCase();
    if (eventName === 'EXIT' || connectionResponse === 'CONNECTED') {
      this.setState({
        showPlaidModal: false,
      });
    }

    this.setState({
      status: connectionResponse,
      data
    });
  };

  renderLogInPage = () => {
    const { showPlaidModal } = this.state;
    return (
      <Container>
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
        <TouchableHighlight
          onPress={() => this.setState({ showPlaidModal: true })}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Add Bank</Text>
        </TouchableHighlight>
      </Container>
    );
  }

  renderDataPage = () => (
    <Container>
      <ScrollView>
        <Text>
          {this.state.status}
        </Text>
        <Text>
          {JSON.stringify(this.state.data)}
        </Text>
      </ScrollView>
    </Container>
  );

  render() {
    const { status } = this.state;
    switch (status) {
      case 'CONNECTED':
        return this.renderDataPage();
      default:
        return this.renderLogInPage();
    }
  }
}

const styles = EStyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#3585E3',
    borderColor: '#3585E3',
    borderRadius: 5,
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    width: 200,
    height: 50
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    sendPublicToken,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(ExampleScreen);