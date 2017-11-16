import React from 'react'
import { connect } from 'react-redux'
import { getDecks } from '../actions'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Animated } from 'react-native'
import colors from '../utils/colors'
import AddButton from './AddButton'

class DeckList extends React.Component {
  componentWillMount() {
    this.props.getDecks()
  }

  componentDidMount() {
    this.animatedValue = new Animated.Value(1);
    this.props.getDecks()
  }
  render() {
    const { navigation } = this.props
    const { decks } = this.props
      return (
        <View
          style={styles.container}
        >
          {decks.length > 0 ? this.renderDecks(decks) : this.renderEmpty()}
          <AddButton
            onPress={() => {
              navigation.navigate(
                'CreateDeckScreen',
                {},
              )
            }}
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
        onPress={() => {
          Animated.spring(this.animatedValue, {
            toValue: .5
          }).start()
          Animated.spring(this.animatedValue, {
            toValue: 1,
            friction: 3,
            tension: 40
          }).start()
          navigation.navigate(
          'DeckScreen',
          { title, },
        )
        }}
      >
        <Text style={styles.information}>
          {title}
        </Text>
        <Text style={styles.card}>
          {questions.length} {questions.length > 1 ? 'cards' : 'card'}
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
    decks: Object.keys(decks).map(key => decks[key]),
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
    backgroundColor: colors.tan,
  },
  deck: {
    backgroundColor: colors.gray,
    borderRadius: 5,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    
  },
  information: {
    fontSize: 24,
    color: colors.white,
  },
  card: {
    fontSize: 15,
    color: colors.yellow,
  },
  warning: {
    fontSize: 24,
    color: colors.red,
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)