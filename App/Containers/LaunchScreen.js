import React, { Component } from 'react'
import { ScrollView, Text, TextInput, Image, View } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: '', password: '' };
  }
  login = () => {
    this.props.navigation.navigate('HomeScreen');
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <TextInput
              style={{ height: 50, color: 'white' }}
              onChangeText={(userName) => this.setState({ userName })}
              value={this.state.userName}
              placeholder='User Name'
              placeholderTextColor='#FFF'
            />
            <TextInput
              style={{ height: 50, color: 'white' }}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              secureTextEntry={true}
              placeholder='Password'
              placeholderTextColor='#FFF'
            />
          </View>
          <View>
            <RoundedButton onPress={this.login}>
              Login
          </RoundedButton>
          </View>
        </ScrollView>
      </View>
    )
  }
}
