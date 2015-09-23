import React, { Component, PropTypes, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Counter extends Component {
  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <View style={[styles.wrap, counter.rotate && styles.rotate]}>
        <TouchableOpacity style={styles.aside} onPress={increment}>
          <Text style={styles.asideText}>+</Text>
        </TouchableOpacity>
        <View style={styles.counter}>
          <Text style={[styles.content, counter.value < 0 && styles.contentMin]}>{ counter.value }</Text>
        </View>
        <TouchableOpacity style={styles.aside} onPress={decrement}>
          <Text style={styles.asideText}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};


const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#f9f9f9',
    position: 'relative'
  },

  rotate: {
    transform: [{rotate: '180deg'}]
  },

  aside: {
    width: 57,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center'
  },

  counter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  content: {
    fontSize: 150
  },

  asideText: {
    fontSize: 50
  },

  contentMin: {
    color: '#f00'
  }
});

export default Counter;