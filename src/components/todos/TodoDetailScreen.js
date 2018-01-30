/*
    This is the detail of the to-do
 */

import React, { Component } from 'react';
import {View, TouchableOpacity, StyleSheet} from "react-native";
import { Container, Header, Content,Thumbnail, List, ListItem, Body, Text, H2 } from 'native-base';



export default class TodoDetailScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.meeting.meetingType,
    });

    render(){
        const { userMap, meeting } = this.props.navigation.state.params;
        return (
            <Container style={{backgroundColor: '#fff',}}>
                <Content>
                    <ListItem>
                        <View>
                            <H2 style={styles.headerStyle}>WHO:</H2>
                            <View style={{flex: 1, flexDirection: "row", flexWrap: 'wrap'}}>
                                {meeting.users.map((userId) => {
                                    const aUser = userMap.get(userId);
                                    return (
                                        <View style={{marginHorizontal:10 }} key={userId}>
                                          <Thumbnail source={{uri: aUser.avatar}}/>
                                          <Text note>{aUser.name}</Text>
                                        </View>
                                    )
                                })}
                        </View>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View>
                            <H2 style={styles.headerStyle}>WHAT:</H2>
                            <View style={{flex: 1, flexDirection: "row", justifyContent:"flex-start"}}>
                            <Text>{meeting.meetingType}</Text>
                            </View>
                        </View>

                    </ListItem>

                    <ListItem>
                        <View>
                            <H2 style={styles.headerStyle}>WHEN:</H2>
                            <View style={{flex: 1, flexDirection: "row", justifyContent:"flex-start"}}>
                                <Text>{meeting.begMeetingTime.toLocaleDateString()} </Text>
                                <Text>{meeting.begMeetingTime.toLocaleTimeString()} - </Text>
                                <Text>{meeting.endMeetingTime.toLocaleTimeString()}</Text>
                            </View>

                        </View>

                    </ListItem>
                    <ListItem>
                        <View>
                            <H2 style={styles.headerStyle}>WHERE:</H2>
                            <View style={{flex: 1, flexDirection: "row", justifyContent: "flex-start"}}>
                                <Text>{meeting.meetingLocation} </Text>
                            </View>
                        </View>

                    </ListItem>
                    <ListItem>
                        <View>
                            <H2 style={styles.headerStyle}>THEME:</H2>
                            <View style={{flex: 1, flexDirection: "row", justifyContent: "flex-start"}}>
                                <Text>{meeting.meetingTheme} </Text>
                            </View>
                        </View>

                    </ListItem>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
   headerStyle:{
       marginVertical:10,
       fontWeight:"bold"
   }

});


