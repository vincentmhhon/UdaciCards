import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Button from './Button'
import { NavigationActions } from 'react-navigation'
import colors from "../utils/colors"
import commonStyles from '../utils/commonStyles'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAnswer: false,
      currentIndex: 0,
      correctCount: 0,
    }
  }

  _toggleQuestionAnswer = () => {
    this.setState((prevState) => ({
      showAnswer: !prevState.showAnswer,
    }))
  }

  _markCorrect = () => {
    this.setState((prevState) => ({
      correctCount: prevState.correctCount + 1,
      currentIndex: prevState.currentIndex + 1,
    }))
  }

  _markIncorrect = () => {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
    }))
  }

  _startOver = () => {
    this.setState({
      showAnswer: false,
      currentIndex: 0,
      correctCount: 0,
    })
  }

  render() {
    const { deck } = this.props
    const { questions } = deck
    if (this.state.currentIndex < questions.length) {
      const { question, answer } = questions[this.state.currentIndex]
      return (
        <View style={commonStyles.container}>
          <Text>
            {this.state.currentIndex+1} of {questions.length}
          </Text>
          <Text style={commonStyles.title}>
            {this.state.showAnswer? answer: question}
          </Text>
          <TouchableOpacity
            onPress={() => {this._toggleQuestionAnswer()}}
          >
            <Text
              style={styles.ToggleQuestionAnswer}>
              {this.state.showAnswer? 'Show question': 'Show answer'}
            </Text>
          </TouchableOpacity>
          <Button
            onPress={() => {this._markCorrect()}}
            style={{backgroundColor: colors.green,}}
          >
            Correct
          </Button>
          <Button
            onPress={() => {this._markIncorrect()}}
            style={{backgroundColor: colors.red,}}
          >
            Incorrect
          </Button>
        </View>
      )
    } else {
      return (
        <View>
          <Text style={commonStyles.title}>
            Great! You correctly answer {this.state.correctCount} {this.state.correctCount>1?'questions':'question'} out of {questions.length} questions
          </Text>
          <Button
            onPress={() => {this._startOver()}}
          >
            Start over
          </Button>
          <Button
            onPress={() => { this.props.navigation.dispatch(NavigationActions.back())}}
          >
            Back to deck
          </Button>
        </View>
      )
    }
  }
}

const mapStateToProps = (decks, {navigation}) => {
  return {
    deck: decks[navigation.state.params['title']],
    navigation
  }
}

const styles = StyleSheet.create({
  ToggleQuestionAnswer: {
    fontSize: 18,
    color: colors.purple,
    textAlign: 'center',
    alignItems: 'stretch',
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default connect(mapStateToProps)(Quiz)
const styles = StyleSheet.create({
  ToggleQuestionAnswer: {
    fontSize: 24,
    backgroundColor: colors.red,
    alignItems: 'center'
  },
});

export default connect(mapStateToProps)(Quiz)