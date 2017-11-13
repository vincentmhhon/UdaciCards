import React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import MainNavigator from './components/MainNavigator'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

class App extends React.Component {
  componentDidMount() {
  
  }
  
  render() {
    let store = createStore(
      rootReducer,
      applyMiddleware(thunk),
    )

    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

export default App

