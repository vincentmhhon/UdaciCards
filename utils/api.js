import { AsyncStorage } from 'react-native'
const DECK_STORAGE_KEY = 'UDACICARDS:DECKS'

export function getAllDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(JSON.parse)
}

export function createDeck (title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}

export function createCard (title, card) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(JSON.parse)
    .then((decks) => {
      return {
        ...decks,
        [title]: {
          ...decks[title],
          questions: [...decks[title].questions, card],
        }
      }
    })
    .then((decks) => AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(decks)))
}