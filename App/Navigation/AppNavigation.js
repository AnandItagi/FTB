import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import MainScreenNavigator from '../Containers/HomeScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: {
    screen: LaunchScreen,
    navigationOptions: {
      title: "Login",
      header: {
        visible: false,
      },
    },
  },
  HomeScreen: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'Home',
      headerLeft: null
    }
  }
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  })

export default PrimaryNav
