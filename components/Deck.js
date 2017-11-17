import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  View, Text  } from 'react-native'
import Button from './Button'
import commonStyles from '../utils/commonStyles'

class Deck extends Component {
  
  render() {
    const { navigation, title } = this.props
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
          onPress={() => navigation.navigate(
            'QuizScreen',
            { title, },
          )}
        >
          Start Quiz
        </Button>
      </View>
    );
  }
}

const mapStateToProps = (title, {navigation}) => {
  return {
    title: navigation.state.params['title'],
    navigation
  }
}

export default connect(mapStateToProps)(Deck)