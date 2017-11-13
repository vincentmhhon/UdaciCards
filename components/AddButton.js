import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import colors from '../utils/colors'

class AddButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.AddButton}
        onPress={this.props.onPress}
      >
        <Ionicons name={"ios-add"}  size={50} color={colors.purple} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  AddButton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    backgroundColor:'#fff',
    borderRadius:50,
  },
});


export default AddButton