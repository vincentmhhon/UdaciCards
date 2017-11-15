import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux' 
import { NavigationActions } from 'react-navigation'
import { createCard } from '../actions'
import  Button from './Button'
import commonStyles from '../utils/commonStyles'

class CreateCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: '',
    }
  }

  _save = () => {
    const title = this.props.navigation.state.params['title']
    const { question, answer } = this.state
    const { createCard } = this.props
    createCard(title, question, answer)
    this.setState({question: '', answer: ''})
    this.props.navigation.dispatch(NavigationActions.back())

  }

  _onChangeQuestionText = (text) => {
    this.setState({question: text});
  }

  _onChangeAnswerText = (text) => {
    this.setState({answer: text});
  }

  render() {

    const { question, answer } = this.state
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>
          Question
        </Text>
        <TextInput
          style={commonStyles.input}
          value={question}
          onChangeText={this._onChangeQuestionText}
        />
        <Text style={commonStyles.title}>
          Answer
        </Text>
        <TextInput
          style={commonStyles.input}
          value={answer}
          onChangeText={this._onChangeAnswerText}
        />
        <Button
          onPress={() => {
            this._save()
          }}
          disabled={question === '' || answer === ''}
        >
          Submit
        </Button>
      </View>
    );
  }
}

const mapStateToProps = (question, answer) => ({
  question: question,
  answer: answer,
})

const mapDispatchToProps = (dispatch) => {
  return {
    createCard: (title, question, answer) => {
      dispatch(createCard(title, question, answer))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard)