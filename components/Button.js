import React, { Component } from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import colors from "../utils/colors"
import { Dimensions } from 'react-native'
let { width } = Dimensions.get("window")

class Button extends Component {
  render() {
    let opacity = this.props.disabled ? 1 : 0.5;
    return (
      <TouchableOpacity
        activeOpacity={opacity}
        onPress={this.props.onPress}
        style={[styles.Button]}
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
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: colors.green
  },
  ButtonText: {
    fontSize: width * 1.0
  }
});

Button.defaultProps = { disabled: false };
export default Button;
