import { StyleSheet } from 'react-native'
import colors from './colors'
const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tan,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  title: {
    fontSize: 20,
    color: colors.orange,
    textAlign: 'center',
    alignItems: 'stretch',
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 5,
    alignItems: 'stretch',
    marginRight: 10,
    marginLeft: 10
  },
})

export default commonStyles