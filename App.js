import React from 'react'
import { Provider } from 'react-redux' // 5.0.6
import { View } from 'react-native'
import MainNavigator from './components/MainNavigator'
import { createStore, applyMiddleware } from 'redux' // 3.7.2
import thunk from 'redux-thunk' // 2.2.0
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

