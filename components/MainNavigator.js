import { StackNavigator } from "react-navigation"

export default const MainNavigator = StackNavigator({
  Home: {
    screen: ListDeckScreen,
    path: "listDeck",
  },
  QuizScreen: {
    screen: QuizScreen,
  },
  CreateCard: {
    screen: CreateCardScreen,
    path: "createCard/:deckID",
  }
});