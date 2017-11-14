import React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import MainNavigator from './components/MainNavigator'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { Constants } from 'expo'
import colors from './utils/colors'

class App extends React.Component {
  
  render() {
    let store = createStore(
      rootReducer,
      applyMiddleware(thunk),
    )
    return (
      <Provider store={store}>
        <View style={{flex: 1, paddingTop: Constants.statusBarHeight}}>
          <MainNavigator style={{backgroundColor: colors.tan }} />
        </View>
      </Provider>
    )
  }
}

export default App

