import React from 'react'
import { ScrollView, Text, ListView, Image, View, TouchableOpacity, Alert } from 'react-native'
import { TabNavigator } from "react-navigation";
import SendSMS from 'react-native-sms'

import NewScreen from './NewScreen'
import EnquiryScreen from './EnquiryScreen'
import RoundedButton from '../Components/RoundedButton';
import Header from '../Components/Header';
import Row from '../Components/Row';

// Styles
import styles from './Styles/HomeScreenStyles';
import images from '../Themes/Images';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([{ name: { first: 'Anand', last: 'Itagi' }, picture: { large: '../Images/DSC_0484.JPG' } }, { name: { first: 'Tilak', last: 'Dance' }, picture: { large: '../Images/DSC_0484.JPG' } }, { name: { first: 'Kavya', last: 'Singh' }, picture: { large: '../Images/DSC_0484.JPG' } }]),
    };
  }
  static navigationOptions = {
    tabBarLabel: 'Billing'
  }
  componentWillMount() {

  }

  sendBill = () => {
    SendSMS.send({
      body: 'The default body of the SMS!',
      recipients: ['9844050512', '9844050512'],
      successTypes: ['sent', 'queued']
    }, (completed, cancelled, error) => {
      Alert.alert(
        'SMS Callback: ',
        'completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      )
    });
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row {...data} sendBill={this.sendBill} />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderHeader={() => <Header />}
        />
      </View>
    )
  }
}
export default MainScreenNavigator = TabNavigator({
  HomeScreen: { screen: HomeScreen },
  NewScreen: { screen: NewScreen },
  EnquiryScreen: { screen: EnquiryScreen }
}, {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  })
