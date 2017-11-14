import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import commonStyles from '../utils/commonStyles'

export default class CreateCard extends React.Component {
  render() {
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>CreateCard</Text>
      </View>
    );
  }
}
