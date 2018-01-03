import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import React, {Component} from 'react';
import TimeSelector from "./TimeSelector";
import DateSelector from "./DateSelector";

export default class Settings extends Component {

   render() {
     return (
      <View style={styles.container}>

          <DateSelector/>
          <TimeSelector/>

       </View>
     );
   }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
