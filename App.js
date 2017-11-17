import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, Platform, View } from 'react-native'
import MainNavigator from './components/MainNavigator'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { Constants } from 'expo'
import colors from './utils/colors'
import { setLocalNotification } from './utils/helpers'

class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  
  render() {
    const store = createStore(
      rootReducer,
      applyMiddleware(thunk),
    )
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator style={{backgroundColor: colors.tan }} />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 0 : Constants.statusBarHeight,
  },
});

export default App