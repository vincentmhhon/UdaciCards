import { AsyncStorage } from 'react-native'
const DECK_STORAGE_KEY = 'UDACICARDS:DECKS'

export function getDecks () {
  try {
    AsyncStorage.getItem(DECK_STORAGE_KEY)
      .then((decks) => {
        console.log(decks)
        return decks !== null ? JSON.parse(decks) : {}
      })
  }
  catch (error) {
    console.log(error)
    return {}
  }
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
  return this.getDecks()
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