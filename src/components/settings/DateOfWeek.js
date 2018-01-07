import React, {Component} from 'react'
import {
  StyleSheet, View, Image, TouchableHighlight
} from 'react-native';
import { Container, Text, Content} from 'native-base';


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
            <Container>
                <Content>
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
                                                    key={index}>
                                    <Text style={{
                                        textAlign: 'center',
                                        color: textColor,
                                        fontWeight: 'bold',
                                        margin: 2
                                    }}>{date.date}</Text>
                                </TouchableHighlight>
                            )
                        }
                    )}


                    </View>


                </Content>

            </Container>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        //flex
    },

    datesContainer:{
        flexDirection:"row",
        justifyContent: "center",
        flexWrap:"wrap",
        flexOffset:1
    },
    badger: {
        height: 32,
        width: 32,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#444a95',
        marginHorizontal:8
    }
});