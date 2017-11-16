import { AsyncStorage } from 'react-native'
export const DECK_STORAGE_KEY = 'CARDS:DECKS'

export function getDecks() {
  try {
    const decks = AsyncStorage.getItem(DECK_STORAGE_KEY)
      .then(decks => {
        return decks !== null ? JSON.parse(decks) : {}
      })
    return decks
  }
  catch (error) {
    console.log(error)
    return {}
  }
}

export function getDeck(title) {
  try {
    return this.getDecks()
      .then(decks => {
        return decks[title]
      })
  }
  catch (error) {
    console.log(error)
    return {error}
  }
}

export function createDeck(title) {
  try {
    const deck = {
      [title]: {
        title: title,
        questions: []
      }
    }
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck))
      .then(() => {
        return deck
      })
  }
  catch (error) {
    console.log(error)
    return {}
  }
}

export function createCard(title, question, answer) {
  try {
    const card = { question, answer }
    const newDeck = this.getDeck(title)
      .then(deck => {
        return ({
          [title]: {
            title: title,
            questions: deck.questions.concat(card)
          }
        })
      })

    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(newDeck))
      .then(() => {
        return newDeck
      })
  }
  catch (error) {
    console.log(error)
    return {}
  }
}