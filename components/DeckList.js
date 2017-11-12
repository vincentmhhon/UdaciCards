import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import colors from '../utils/colors'
import Deck from './Deck'
import Button from './Button'

class DeckList extends React.Component {
  
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>DeckList</Text>
        <Button
          onPress={() => navigation.navigate(
            'CreateDeckScreen',
            {  },
          )}
        >
          A
        </Button>
      </View>
    )
  }
}


export default DeckList