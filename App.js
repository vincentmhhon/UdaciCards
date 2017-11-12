import React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import MainNavigator from './components/MainNavigator'

class App extends React.Component {
  componentDidMount() {
  
  }
  
  render() {
    return (
      <Provider>
        <View style={{flex: 1}}>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

export default App

