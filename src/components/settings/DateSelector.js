import {
  StyleSheet, Text, View, Image, TouchableHighlight
} from 'react-native';

import React, {Component} from 'react';
import {Badge} from 'react-native-elements'

export default class DateSelector extends Component {

    render(){

        return (
            <View>
                <View style={{flex:1, flexDirection: "row", justifyContent:'center'}}>
                <View  style={styles.dateContainer}>
                    <TouchableHighlight style={[styles.badger, {backgroundColor:'#444a95',}]}>
                        <Text style={{textAlign:'center', color:"white", fontWeight: 'bold', margin:2}}>Su</Text>
                    </TouchableHighlight>
                </View>
                <View  style={styles.dateContainer}>
                    <TouchableHighlight style={styles.badger}>
                        <Text style={{textAlign:'center', color:"#444a95", fontWeight: 'bold', margin:2}}>M</Text>
                    </TouchableHighlight>
                </View>
                <View  style={styles.dateContainer}>
                    <TouchableHighlight style={[styles.badger, {backgroundColor:'#444a95',}]}>
                        <Text style={{textAlign:'center', color:"white", fontWeight: 'bold', margin:2}}>Th</Text>
                    </TouchableHighlight>
                </View>
                <View  style={styles.dateContainer}>
                    <TouchableHighlight style={[styles.badger, {backgroundColor:'#444a95',}]}>
                        <Text style={{textAlign:'center', color:"white", fontWeight: 'bold', margin:2}}>W</Text>
                    </TouchableHighlight>
                </View>
                </View>

            </View>


        )
    }



}


const styles = StyleSheet.create({

  dateContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
    badger: {
      height:32,
        width:32,
        borderRadius:15,
        borderWidth: 3,
        borderColor: '#444a95'
    }
});
