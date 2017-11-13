import * as API from '../utils/api'
export const GET_DECKS = "GET_DECKS"
export const CREATE_DECK = "CREATE_DECK"
export const CREATE_CARD = "CREATE_CARD"

export function getDecks() {
  return async (dispatch) => {
    const decks = API.getDecks()
    dispatch({
      type: GET_DECKS,
      decks,
    })
  }
}

export function createDeck(title) {
  return async (dispatch) => {
    console.log('start create Deck')
    const deck = API.createDeck(title)
    console.log('end create Deck')
    dispatch({
      type: CREATE_DECK,
      deck,
    })
  }
}

export function createCard(title, question, answer) {
  return async (dispatch) => {
    const card = { question, answer }
    const decks = API.createCard(title, card)
    dispatch({
      type: CREATE_CARD,
      decks,
    })
  }
}