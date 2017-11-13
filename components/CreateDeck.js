import React from 'react'
import { Alert, View, Text, TextInput, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { createDeck } from '../actions'
import  Button from './Button'
import colors from '../utils/colors'

class CreateDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
  }

  _save = () => {
    const { title } = this.state
    console.log(title)
    const { decks, createDeck } = this.props
    console.log("deck " + decks)
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
        style={styles.container}
      >
        <Text style={styles.title}>
          Please enter title of your new Deck.
        </Text>
        <TextInput
          style={styles.input}
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
          Confirm
        </Button>
      </View>
    )
  }
}

const mapStateToProps = (decks) => ({
  decks,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createDeck,
  }, dispatch)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tan,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.orange,
    textAlign: 'center',
  },
  input: {
    height: 60,
    width: 300,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeck)