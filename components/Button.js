import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from "../utils/colors"

class Button extends Component {
  render() {
    let opacity = this.props.disabled ? 1 : 0.5;
    return (
      <TouchableOpacity
        activeOpacity={opacity}
        onPress={this.props.onPress}
        style={[styles.Button, this.props.style]}
        disabled={this.props.disabled}
      >
        <Text style={[styles.ButtonText]}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  Button: {
    padding: 10,
    margin: 10,
    backgroundColor: colors.green,
    alignItems: 'center'
  },
  ButtonText: {
    fontSize: 24,
  }
});

Button.defaultProps = { disabled: false }
export default Button
