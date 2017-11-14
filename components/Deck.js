import React, { Component } from 'react'
import { connect } from 'react-redux' // 5.0.6
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
            'CreateCard',
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
  /*
  const title = getNavigationParam(navigation, 'title')
  return {
    deck: title !== null ? decks[title] : {},
    navigation,
  }
  */
  return {
    deck: decks[navigation.state.params['title']],
    navigation
    
  }
}



export default connect(mapStateToProps)(Deck)