import React, { Component, PropTypes, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';

import * as CountersActions from '../actions/CountersActions';
import Counter from '../components/Counter';
import MiddleMenu from '../components/MiddleMenu';

class App extends Component {
  render() {
    const { counters, dispatch } = this.props;
    const countersActions = bindActionCreators(CountersActions, dispatch);

    return (
      <View style={styles.container}>
        <Counter
          counter={counters.counters[0]}
          increment={countersActions.increment.bind(null, 0)}
          decrement={countersActions.decrement.bind(null, 0)}
          />
        <MiddleMenu
          reset={countersActions.reset}
          changeDefault={countersActions.changeDefault}
          defaultValue={counters.defaultValue}
          />
        <Counter
          counter={counters.counters[1]}
          increment={countersActions.increment.bind(null, 1)}
          decrement={countersActions.decrement.bind(null, 1)}
          />
      </View>
    );
  }
}

App.propTypes = {
  counters: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f9f9f9'
  },

  menuRow: {
    borderWidth: 2,
    borderColor: '#333',
    backgroundColor: '#f9f9f9',
    height: 47
  }
});

function mapStateToProps(state) {
  return {
    counters: state.counters
  };
}

export default connect(mapStateToProps)(App);