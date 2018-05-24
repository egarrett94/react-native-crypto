import React from 'react';
import { View } from 'react-native';
import { Header, CryptoContainer } from './src/components';
import { Provider } from 'react-redux';
import Store from './src/Store.js';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header/>
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}