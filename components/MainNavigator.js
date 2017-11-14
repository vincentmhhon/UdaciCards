import React from 'react'
import { StackNavigator } from 'react-navigation' // 1.0.0-beta.19
import DeckList from './DeckList'
import Deck from './Deck'
import CreateDeck from './CreateDeck'
import CreateCard from './CreateCard'
import Quiz from './Quiz'

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList,
    path: "listDeck",
  },
  DeckScreen: {
    screen: Deck,
    path: "deck/:title",
  },
  CreateDeckScreen: {
    screen: CreateDeck,
    path: "createDeck"
  },
  CreateCard: {
  screen: CreateCard,
    path: "createCard/:title",
  },
  QuizScreen: {
    screen: Quiz,
    path: "quiz/:title",
  }
});

export default MainNavigator