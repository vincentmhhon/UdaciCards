import { StackNavigator } from 'react-navigation'
import DeckList from './DeckList'
import Deck from './Deck'
import CreateDeck from './CreateDeck'
import CreateCard from './CreateCard'
import Quiz from './Quiz'

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList,
    path: "listDeck",
    navigationOptions: {
      title: "Deck List",
    }
  },
  DeckScreen: {
    screen: Deck,
    path: "deck/:title",
    navigationOptions: {
      title: "Deck Detail",
    }
  },
  CreateDeckScreen: {
    screen: CreateDeck,
    path: "createDeck",
    navigationOptions: {
      title: "Create Deck",
    }
  },
  CreateCardScreen: {
    screen: CreateCard,
    path: "createCard/:title",
    navigationOptions: {
      title: "Create Card",
    }
  },
  QuizScreen: {
    screen: Quiz,
    path: "quiz/:title",
    navigationOptions: {
      title: "Quiz",
    }
  }
});

export default MainNavigator