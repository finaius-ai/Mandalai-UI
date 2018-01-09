import React, {Component} from 'react';
import {Image, View,  Text, Button} from 'react-native';
import {Container, Header, Content, ListItem, Thumbnail, Icon, H2, Left, Body, Right, Footer} from 'native-base';


const num2week = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
const num2Time = [
    "12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm",
    "1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm",];

export default class MtgReqView extends Component {

    render() {
        const {user} = this.props;
        return (
            <View style={{flex:1, }}>

                    <H2 style={{fontWeight: 'bold'}}>YOUR PARAMETERS:</H2>
                    {user.setting.meetingTime.map((meetingType, idx) => {
                        return (
                            <View style={{flex: 1, justifyContent: "space-between",}} key={idx}>
                                <Text>{meetingType.meetingType}</Text>
                                {meetingType.availability.map((time, idx) => {

                                    return (
                                        <View key={idx} style={{flex:1, flexDirection:"row", justifyContent:"flex-end"}}>
                                            <Text>{num2week[time.dateOfTheWeek]}, </Text>
                                            <Text>  {num2Time[time.begTimeOfDay]}</Text>
                                            <Text>-</Text>
                                            <Text>{num2Time[time.endTimeOfDay]}</Text>
                                        </View>
                                    )

                                })}
                            </View>
                        )
                    })}

            </View>


        );
    }
}