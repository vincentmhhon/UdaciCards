import {GET_DECKS, CREATE_DECK, CREATE_CARD} from '../actions'

export default function rootReducer(decks = {}, action) {
  switch(action.type) {
    case GET_DECKS:
      return {...action.decks}
    case CREATE_DECK:
      return {
        ...decks,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }
    case CREATE_CARD:
      return {
        ...decks,
        [action.title]: {
          title: action.title,
          questions: [...decks[action.title].questions, action.card]
        }
      }
    default:
      return decks
  }
}