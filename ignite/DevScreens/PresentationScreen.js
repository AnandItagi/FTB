import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from './DevTheme'
import ButtonBox from './ButtonBox'
import { StackNavigator } from 'react-navigation'
import RoundedButton from '../../App/Components/RoundedButton'
// Styles
import styles from './Styles/PresentationScreenStyles'
import ThemeScreen from './ThemeScreen';
class PresentationScreen extends React.Component {
  homeScreen = () => {
    this.props.navigation.navigate('HomeScreen')
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={this.props.screenProps.toggle} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 10,
          zIndex: 10
        }}>
          <Image source={Images.closeButton} />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
          <Text style={{paddingTop:200, textAlign:'center', color:'#FFF'}}>
            List of due users
          </Text>
        </ScrollView>
        <View>
          <RoundedButton onPress={this.homeScreen}>
            Continue
          </RoundedButton>
        </View>
        {/*<View style={styles.banner}>
          <Text style={styles.bannerLabel}>Made with ❤️</Text>
        </View>*/}
      </View>
    )
  }
}

export default StackNavigator({
  PresentationScreen: {screen: PresentationScreen},
  ThemeScreen: {screen: ThemeScreen}
}, {
  cardStyle: {
    opacity: 1,
    backgroundColor: '#3e243f'
  },
  initialRouteName: 'PresentationScreen',
  headerMode: 'none',
  // Keeping this here for future when we can make
  navigationOptions: {
    header: {
      left: (
        <TouchableOpacity onPress={() => window.alert('pop')} ><Image source={Images.closeButton} style={{marginHorizontal: 10}} /></TouchableOpacity>
      ),
      style: {
        backgroundColor: '#3e243f'
      }
    }
  }
})
