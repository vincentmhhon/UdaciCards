import {GET_DECKS, CREATE_DECK, CREATE_CARD} from '../actions'

export default function rootReducer(decks = {}, action) {
  switch(action.type) {
    case GET_DECKS:
      return action.decks
    case CREATE_DECK:
      return action.decks
    case CREATE_CARD:
      return action.decks
    default:
      return decks
   }
}