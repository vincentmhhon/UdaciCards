import React from 'react'
import { KeyboardAvoidingView, Text, TextInput } from 'react-native'
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
      <KeyboardAvoidingView behaviour='padding' style={commonStyles.container}>
        <Text style={commonStyles.title} >
          Question
        </Text>
        <TextInput
          style={commonStyles.input}
          value={question}
          onChangeText={this._onChangeQuestionText}
          underlineColorAndroid={'transparent'}
        />
        <Text style={commonStyles.title}>
          Answer
        </Text>
        <TextInput
          style={commonStyles.input}
          value={answer}
          onChangeText={this._onChangeAnswerText}
          underlineColorAndroid={'transparent'}
        />
        <Button
          onPress={() => {
            this._save()
          }}
          disabled={question === '' || answer === ''}
        >
          Submit
        </Button>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (question, answer) => ({
  question,
  answer,
})

export default connect(mapStateToProps, {createCard})(CreateCard)