import * as api from '../utils/api'
export const GET_DECKS = "GET_DECKS"
export const CREATE_DECK = "CREATE_DECK"
export const CREATE_CARD = "CREATE_CARD"

export const getDecks = () => (dispatch) => (
  api
    .getDecks()
    .then(decks => dispatch({
      type: GET_DECKS,
      decks,
    }))
)

export const createDeck = (title) => (dispatch) => (
  api
    .createDeck(title)
    .then(deck => dispatch({
      type: CREATE_DECK,
      title,
    }))

)

export const createCard = (title, question, answer) => (dispatch) => (
  api
    .createCard(title, { question, answer})
    .then(deck => dispatch({
      type: CREATE_CARD,
      title,
      card: {question, answer}
    }))
)
