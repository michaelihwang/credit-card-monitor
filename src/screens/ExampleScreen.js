import React, { Component } from 'react';
import { Text } from 'react-native';

import { Container } from '../components/Container';

class ExampleScreen extends Component {

  render() {
    return (
      <Container>
        <Text>
          Init
        </Text>
      </Container>
    );
  }
}

export default ExampleScreen;