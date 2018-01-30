import React, { Component } from 'react';
import { View, TouchableOpacity} from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';


const DateCard = (props) => (

        <Card>
            <TouchableOpacity>
            <CardItem>
                <Body>
                <Text>
                    {props.date}
                </Text>
                <Text>
                    {props.time}
                </Text>
                <Text>
                    {props.duration}
                </Text>
                </Body>
            </CardItem>
           </TouchableOpacity>
        </Card>

);


export default class CalendarMessage extends Component {

    constructor(props){
        super(props)
    }
  render() {
    return (
            <View style={{flex:1, flexDirection:"row", justifyContent:'space-around', marginVertical:15}}>

                <DateCard date="Tue 02/04" time="2pm" duration="1 hour"/>
                <DateCard date="Wed 02/05" time="2pm" duration="1 hour"/>
                <DateCard date="Th 02/07" time="7pm" duration="1 hour"/>
            </View>

    );
  }
}