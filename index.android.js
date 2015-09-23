import 'babel/polyfill';
import React, { AppRegistry, Component } from 'react-native';
import { Provider } from 'react-redux/native';
import App from './app/containers/App';

import configureStore from './app/store';

let store = configureStore();

class MTGCounterApp extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MTGCounterApp', () => MTGCounterApp);

///**
// * Sample React Native App
// * https://github.com/facebook/react-native
// */
//'use strict';
//
//var React = require('react-native');
//var {
//  AppRegistry,
//  StyleSheet,
//  Text,
//  View,
//} = React;
//
//var MTGCounterApp = React.createClass({
//  render: function() {
//    return (
//      <View style={styles.container}>
//        <Text style={styles.welcome}>
//          Welcome to React Native!
//        </Text>
//        <Text style={styles.instructions}>
//          To get started, edit index.android.js
//        </Text>
//        <Text style={styles.instructions}>
//          Shake or press menu button for dev menu
//        </Text>
//      </View>
//    );
//  }
//});
//
//var styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});
//
//AppRegistry.registerComponent('MTGCounterApp', () => MTGCounterApp);
