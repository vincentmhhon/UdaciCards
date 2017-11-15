import React from 'react'
import { Alert, View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
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
      this.props.navigation.dispatch(NavigationActions.back())
    }
  }

  _onChangeTitleText = (text) => {
    this.setState({title: text});
  }
  render() {
    const { title } = this.state
    return (

      <View
        style={commonStyles.container}
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
      </View>
    )
  }
}

const mapStateToProps = (decks) => ({
  decks
})

const mapDispatchToProps = (dispatch) => {
  return {
    createDeck: (title) => {
      dispatch(createDeck(title))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateDeck)