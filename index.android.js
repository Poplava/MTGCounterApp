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
