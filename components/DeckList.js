import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import colors from '../utils/colors'
import Deck from './Deck'

class DeckList extends React.Component {
  
  render() {
    const { decks } = this.props
    return decks.length > 0 ? this.renderDecks(decks) : this.renderEmpty()
  }
  
  renderDeck = ({ item }) => {
    const { navigation } = this.props
    const { title, questions } = item
    return (
      <TouchableOpacity
        key={title}
        style={styles.card}
        onPress={() => navigation.navigate(
          'Deck',
          { title, },
        )}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cardCount}>
          {questions.length} {questions.length !== 1 ? 'cards' : 'card'}
        </Text>
      </TouchableOpacity>
    )
  }
  
  renderDecks = (decks) => {
    return (
      <FlatList
        contentContainerStyle={{backgroundColor: colors.white}}
        data={decks.sort((a, b) => a.title < b.title)}
        renderItem={this.renderDeck}
        keyExtractor={(item, index) => item.title}
        ListEmptyComponent={this.renderEmpty}
      />
    )
  }
  
  renderEmpty = () => (
    <View style={styles.container}>
      <Text style={styles.noDecksText}>
        You have no decks yet
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  card: {
    backgroundColor: colors.blue,
    borderRadius: 5,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
  },
  title: {
    fontSize: 24,
    color: colors.white,
  },
  noDecksText: {
    fontSize: 24,
    color: colors.darkGray,
  },
  cardCount: {
    fontSize: 18,
    color: colors.white,
  }
})

export default DeckList