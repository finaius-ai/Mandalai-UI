import React, {Component} from 'react'
import {
   Button,
} from 'react-native';
import {Container, Text, Content} from 'native-base';
import { NavigationActions } from 'react-navigation'

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
                    <DateOfWeek/>
                    <TimeOfDay/>
                </Content>

            </Container>

        )
    }
}
