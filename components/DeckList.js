import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getDecks } from '../actions'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import colors from '../utils/colors'

import AddButton from './AddButton'

class DeckList extends React.Component {
  componentDidMount() {
    this.props.getDecks()
  }
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>DeckList</Text>
        <AddButton
          onPress={() => navigation.navigate(
            'CreateDeckScreen',
            {  },
          )}
        />
      </View>
    )
  }
}

const mapStateToProps = (decks, {navigation}) => {
  return {
    decks: Object.keys(decks).map(key => decks[key]),
    navigation,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getDecks,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)