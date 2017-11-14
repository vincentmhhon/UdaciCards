import React, { Component } from 'react'
import { connect } from 'react-redux' // 5.0.6
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import "redux"; // 3.7.2

class Deck extends Component {
  
  render() {
    return (
      <View style={styles.deckGroup}>
        <Text>
          Deck
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckGroup: {
    flexDirection: "row",
    alignItems: "stretch",
    padding: 10,
    marginBottom: 5
  }
})

const mapStateToProps = (decks, {navigation}) => {
  /*
  const title = getNavigationParam(navigation, 'title')
  return {
    deck: title !== null ? decks[title] : {},
    navigation,
  }
  */
  return {deck: 'a'}
}

export default connect(mapStateToProps)(Deck)