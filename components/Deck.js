import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  View, Text  } from 'react-native'
import Button from './Button'
import commonStyles from '../utils/commonStyles'

class Deck extends Component {
  
  render() {
    const { navigation, deck } = this.props
    const { title } = deck
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>
          {title}
        </Text>
        <Button
          onPress={() => navigation.navigate(
            'CreateCardScreen',
            { title, },
          )}
        >
          Add Card
        </Button>
        <Button
          onPress={() => {
      
          }}
        >
          Start Quiz
        </Button>
      </View>
    );
  }
}

const mapStateToProps = (decks, {navigation}) => {
  return {
    deck: decks[navigation.state.params['title']],
    navigation
  }
}

export default connect(mapStateToProps)(Deck)