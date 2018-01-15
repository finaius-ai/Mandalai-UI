/*
    This tab is the setting that user can use to stylize.
 */
import React, {Component} from 'react';
import {Image, View,  Text, Button, StyleSheet} from 'react-native';
import { Container, Header, Body, Content, List, ListItem,H2, Separator, Thumbnail } from 'native-base';
import Users from "../mockdata/user/User"
import { StackNavigator } from 'react-navigation';
import TimeSetting from "./time_setting/TimeSetting";


const num2week = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
const num2Time = [
    "12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm",
    "1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm",];


class SettingScreen extends Component {
    static navigationOptions = {
        title: 'setting',
    };

    constructor() {
        super();
        this.state = {
            user: Users[Math.floor(Math.random() * 9)]
        };
    }

    render() {
        const {navigate} = this.props.navigation;
        const {user} = this.state;
        return (
            <Container style={styles.container}>
                <Content>
                    <ListItem>
                        <View style={{flex: 1, justifyContent: "space-between"}}>
                            <H2 style={styles.headerStyle}>YOU:</H2>

                            <Thumbnail style={{marginVertical: 10}}
                                       source={{uri: user.avatar}}/>
                            <View>
                                <Text>{user.name}</Text>
                                <Text>{user.occupation}</Text>
                                <Text>{user.phone}</Text>
                            </View>
                        </View>
                    </ListItem>
                    <ListItem>

                        <View style={{flex: 1, justifyContent: "space-between"}}>
                            <H2 style={styles.headerStyle}>YOUR UNIVERSE:</H2>

                            {this.state.user.setting.sourceMedium.map((medium, idx) => {
                                return (
                                    <View style={{flex: 1, justifyContent: "space-between", flexDirection: "row"}}
                                          key={idx}>
                                        <Text>{medium.source}</Text>
                                        <Text>{medium.connected ? "Connected" : "Click to Connect"}</Text>
                                    </View>
                                )
                            })}
                        </View>

                    </ListItem>
                    <ListItem>
                        <View style={{flex: 1, justifyContent: "space-between"}}>
                            <H2 style={styles.headerStyle}>YOUR REMINDERS:</H2>

                            {this.state.user.setting.reminderMethod.map((method, idx) => {
                                return (
                                    <View style={{flex: 1, justifyContent: "space-between", flexDirection: "row"}}
                                          key={idx}>
                                        <Text>via {method.source}</Text>
                                        <Text>via {method.connected ? "Connected" : "Click to Connect"}</Text>
                                    </View>
                                )
                            })}

                            {this.state.user.setting.remindingTime.map((time, idx) => {
                                return (
                                    <View style={{flex: 1, justifyContent: "space-between", flexDirection: "row"}}
                                          key={idx}>
                                        <Text>{time.type}</Text>
                                        <Text>{time.reminderTime}</Text>
                                    </View>
                                )
                            })}

                        </View>

                    </ListItem>
                    <ListItem>
                        <View style={{flex: 1, justifyContent: "space-between"}}>

                            <H2 style={styles.headerStyle}>YOUR PARAMETERS:</H2>
                            {user.setting.meetingTime.map((meetingType, idx) => {
                                return (
                                    <View style={{flex: 1, justifyContent: "space-between",}} key={idx}>
                                        <Text>{meetingType.meetingType}</Text>
                                        {meetingType.availability.map((time, idx) => {

                                            return (
                                                <View key={idx} style={{
                                                    flex: 1,
                                                    flexDirection: "row",
                                                    justifyContent: "flex-end"
                                                }}>
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
                    </ListItem>
                    <ListItem>
                        <Button
                            title={'Add More'}
                            onPress={() => navigate('TimeSetting', {user: this.state.user})}
                            style={{alignSelf: "center"}}
                        />
                    </ListItem>
                </Content>
            </Container>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerStyle: {
        marginVertical: 10,
        fontWeight: "bold"
    }
});

const Setting = StackNavigator({
    Setting: {screen: SettingScreen},
    TimeSetting: {screen: TimeSetting}

});

export default Setting;