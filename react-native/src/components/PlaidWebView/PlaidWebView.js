import React, { Component } from 'react';
import { WebView } from 'react-native';
import { PropTypes } from 'prop-types';

// Base URL for Plaid's WebView API
const BASE_URL = 'https://cdn.plaid.com/link/v2/stable/link.html';

class PlaidWebView extends Component {
  render() {
    const { publicKey, env, product, clientName, onMessage } = this.props;
    const uri = `${
      BASE_URL
    }?key=${
      publicKey
    }&apiVersion=v2&env=${
      env
    }&product=${
      product
    }&clientName=${
      clientName
    }&isWebView=true&isMobile=true`;
    return (
      <WebView
        {...this.props}
        source={{ uri }}
        style={{ flex: 1 }}
        onMessage={(event) => onMessage(JSON.parse(event.nativeEvent.data))}
        useWebKit={true}
      />
    );
  }
}

PlaidWebView.propTypes = {
  publicKey: PropTypes.string.isRequired,
  env: PropTypes.string.isRequired,
  product: PropTypes.array.isRequired,
  clientName: PropTypes.string,
  onMessage: PropTypes.func.isRequired,
};

export default PlaidWebView;