import React, {Component} from 'react'
import {
  StyleSheet, View, Image, TouchableHighlight,
} from 'react-native';
import {Text } from 'native-base';

export default class DateOfWeek extends Component{

    state = {
        Dates: [
            {date: "Su", selected: true},
            {date: "M", selected: false},
            {date: "Tu", selected: true},
            {date: "W", selected: false},
            {date: "Th", selected: true},
            {date: "F", selected: true},
            {date: "Sa", selected: false},
        ],


    };

    render(){
        return (
                    <View style={{flex:1, justifyContent: "center", margin: 10}}>
                    <View style={styles.datesContainer}>
                    {this.state.Dates.map((date, index) => {

                            let backGroundColor = '#fff';
                            let textColor = "black";
                            if (date.selected) {
                                backGroundColor = "#444a95";
                                textColor = "white";
                            }
                            return (
                                <TouchableHighlight style={[styles.badger, {backgroundColor: backGroundColor,}]}
                                                    key={index}
                                                    onPress={() => {
                                                        this.setState((prevState) => {
                                                            prevState.Dates[index].selected = !date.selected;
                                                            return prevState
                                                            }

                                                        )
                                                    }}
                                >
                                    <Text style={{
                                        flex:1,
                                        textAlign: 'center',
                                        color: textColor,
                                        fontWeight: 'bold',
                                        margin: 2,
                                        alignSelf:"center"
                                    }}>{date.date}</Text>
                                </TouchableHighlight>
                            )
                        }
                    )}

                    </View>

                    </View>
        )
    }
}


const styles = StyleSheet.create({

    datesContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent: "center",
        flexWrap:"wrap",
        marginHorizontal:20,
    },
    badger: {
        height: 45,
        width: 45,
        borderRadius: 24,
        borderWidth: 5,
        borderColor: '#444a95',
        marginHorizontal:8,

    },


});