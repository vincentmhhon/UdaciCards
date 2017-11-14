import React from 'react'
import { connect } from 'react-redux' // 5.0.6
import { getDecks } from '../actions'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import colors from '../utils/colors'
import AddButton from './AddButton'

import "redux"; // 3.7.2

class DeckList extends React.Component {
  componentWillMount() {
    this.props.getDecks()
  }

  componentDidMount() {
    this.props.getDecks()
  }
  render() {
    const { navigation } = this.props
    const { decks } = this.props
    console.log("list decks" + JSON.stringify(decks))
    console.log(decks.length)
    console.log(JSON.stringify(decks).length)
      return (
        <View>
          {decks.length > 0 ? this.renderDecks(decks) : this.renderEmpty()}
          <AddButton
            onPress={() => navigation.navigate(
              'CreateDeckScreen',
              {},
            )}
          />
        </View>
      )
  }

  renderDeck = ({ item }) => {
    const { navigation } = this.props
    const { title, questions } = item
    return (
      <TouchableOpacity
        key={title}
        style={styles.deck}
        onPress={() => navigation.navigate(
          'Deck',
          { title, },
        )}
      >
        <Text style={styles.information}>
          {title}
        </Text>

      </TouchableOpacity>
    )
  }

  renderDecks = (decks) => {
    return (
      <FlatList
        contentContainerStyle={{backgroundColor: colors.tan}}
        data={decks.sort((a, b) => a.title < b.title)}
        renderItem={this.renderDeck}
        keyExtractor={(item, index) => item.title}
        ListEmptyComponent={this.renderEmpty}
      />
    )
  }

  renderEmpty = () => {
   return (
     <Text style={styles.warning}>
        You have no deck
     </Text>
   )
  }

}

const mapStateToProps = (decks) => {
  return {
    decks: Object.values(decks).map(deck => deck)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDecks: () => {
      dispatch(getDecks())
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  deck: {
    backgroundColor: colors.gray,
    borderRadius: 5,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
  },
  information: {
    fontSize: 24,
    color: colors.white,
  },
  warning: {
    fontSize: 24,
    color: colors.red,
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)