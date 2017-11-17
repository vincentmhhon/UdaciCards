import React from 'react'
import { Alert, KeyboardAvoidingView, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { createDeck } from '../actions'
import  Button from './Button'
import commonStyles from '../utils/commonStyles'

class CreateDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
  }

  _save = () => {
    const { title } = this.state
    const { decks, createDeck } = this.props
    if (title in decks) {
      Alert.alert(
        'Error',
        'The deck already exist',
      )
    }
    else {
      createDeck(title)
      this.setState({title: ''})
    }
  }

  _onChangeTitleText = (text) => {
    this.setState({title: text});
  }
  render() {
    const { title } = this.state
    return (

      <KeyboardAvoidingView behaviour='padding' style={commonStyles.container}
      >
        <Text style={commonStyles.title}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={commonStyles.input}
          placeholder='e.g. Grammar, Formula'
          value={title}
          onChangeText={this._onChangeTitleText}
        />
        <Button
          onPress={() => {
            this._save()
          }}
          disabled={title === ''}
        >
          Submit
        </Button>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (decks) => ({
  decks
})

export default connect(mapStateToProps, {createDeck})(CreateDeck)