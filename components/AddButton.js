import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import colors from '../utils/colors'

class AddButton extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.AddButton}
        onPress={this.props.onPress}
      >
        <Ionicons name={"ios-add"}  size={50} color={colors.purple} />
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  AddButton: {
    borderWidth:3,
    borderColor: colors.purple,
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    backgroundColor: colors.white,
    borderRadius:40,
    marginBottom: 40,
    marginRight: 20,
    
  },
});


export default AddButton