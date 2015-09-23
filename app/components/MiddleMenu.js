import React, { Component, PropTypes, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Counter extends Component {
  render() {
    const { reset, changeDefault, defaultValue } = this.props;

    return (
      <View style={styles.menu}>
        <TouchableOpacity onPress={reset} style={styles.touchable}>
          <Text style={styles.touchableText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeDefault} style={styles.touchable}>
          <Text style={styles.touchableText}>{defaultValue}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Counter.propTypes = {
  reset: PropTypes.func.isRequired,
  changeDefault: PropTypes.func.isRequired
};


const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#999',
    backgroundColor: '#c9c9c9',
    height: 47,
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  touchable: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#999'
  },

  touchableText: {
    fontSize: 20
  }
});

export default Counter;
