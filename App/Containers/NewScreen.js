import React from 'react'
import { ScrollView, Text, ListView, Image, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import Camera from 'react-native-camera';
var t = require('tcomb-form-native');

// Styles
import styles from './Styles/NewScreenStyles';
import images from '../Themes/Images';

var Form = t.form.Form;
// here we are: define your domain model
var Gender = t.enums({
  M: 'Male',
  F: 'Female'
});
var Course = t.enums({
  dance: 'Dance',
  aerobics: 'Aerobics',
  gymnastics: 'Gymnastics',
  zumba: 'Zumba',
  kungfu: 'Kung Fu',
  classical: 'Classical',
  music: 'Music',
  others: 'Others'
});

var Person = t.struct({
  name: t.String,
  father: t.maybe(t.String),
  gaurdianName: t.maybe(t.String),
  birthDate: t.Date,
  gender: Gender,
  address: t.String,
  number: t.Number,
  email: t.String,
  coursers: Course,
  batchTiming: t.Date
});

var options = {
  fields: {
    name: {
      placeholder: 'Full Name'
    },
    father: {
      placeholder: "Father/Mother Name"
    },
    gaurdianName: {
      placeholder: 'Gaurdian Name'
    },
    birthDate: {
      placeholder: 'Birth Date',
      config: {
        format: (date) => String(date),
      }
    },
    gender: {
      nullOption: { value: '', text: 'Choose your gender' }
    },
    number: {
      placeholder: 'Whatsapp Number'
    },
    email: {
      placeholder: 'E-mail'
    },
    coursers: {
      nullOption: { value: '', text: 'Choose course' }
    },
    batchTiming: {
      placeholder: 'Select Batch Timing'
    },
  }
}; // optional rendering options (see documentation)

class NewScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      value: {
        name: '',
        father: '',
        gaurdianName: '',
        birthDate: '',
        gender: null,
        address: '',
        number: null,
        email: '',
        coursers: null,
        batchTiming: ''
      }
    }
  }
  static navigationOptions = {
    tabBarLabel: 'New'
  }
  onPress = () => {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  }
  onChange = (value) => {
    this.setState({ value });
  }
  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <ScrollView>
          <Form
            ref="form"
            type={Person}
            options={options}
            value={this.state.value}
            onChange={this.onChange}
          />
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}>
            <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
          </Camera>
        </ScrollView>
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default NewScreen;
