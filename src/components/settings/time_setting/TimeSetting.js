import React, {Component} from 'react'
import {
   Button,
} from 'react-native';
import {Container, Text, Content} from 'native-base';

import DateOfWeek from "./DateOfWeek";
import TimeOfDay from "./TimeOfDay";


export default class TimeSetting extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: "set meeting time",
            headerRight: (
                <Button
                    title={'save'}
                    onPress={() => navigation.goBack()}
                />),
        }


    };
    render() {

        return (
            <Container style={{backgroundColor: '#fff',}}>
                <Content>
                    <Text style={{fontSize:12, color:'#636363', margin:15}}>what days do you do meetings?</Text>
                    <DateOfWeek/>
                    <Text style={{fontSize:12, color:'#636363', margin:15}}>what time during do the day do you do meetings?</Text>
                    <TimeOfDay/>
                </Content>

            </Container>

        )
    }
}
