import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import RoundedButton from './RoundedButton';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const Row = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.picture.large }} style={styles.photo} />
    <Text style={styles.text}>
      {`${props.name.first} ${props.name.last}`}
    </Text>
    <RoundedButton style={{padding:'0px 20px'}} onPress={props.sendBill}>
      send
    </RoundedButton>
  </View>
);

export default Row;
