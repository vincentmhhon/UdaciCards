import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import Button from "./Button"

class Deck extends Component {
  
  _startQuiz = () => {
    this.props.startQuiz();
  };
  
  _createCards = () => {
    this.props.createCards();
  };
  
  render() {
    return (
      <View style={styles.deckGroup}>
        <Button onPress={this._startQuiz}>
          {this.props.deck.name}: {this.props.count} cards
        </Button>
        <Button onPress={this._createCards}>
          +
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckGroup: {
    flexDirection: "row",
    alignItems: "stretch",
    padding: 10,
    marginBottom: 5
  }
});

export default Deck;
