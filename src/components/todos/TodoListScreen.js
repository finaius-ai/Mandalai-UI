import React, { Component } from 'react';
import {TouchableOpacity} from "react-native";
import { Container, Header, Content, List,Thumbnail, ListItem, Left, Body, Right,Icon,  Text } from 'native-base';
import meetings from "../mockdata/meeting/MeetingData";
import Users from "../mockdata/user/User"


export default class TodoListScreen extends Component {


    static navigationOptions = ({navigation}) => ({
        title: "todo list"
    });


    state = {
        meetings: meetings.filter((mtg) => mtg.approved ),
        userMap: new Map(Users.map((user) =>[user._id, user] ))
    };

    render(){
        //console.log(this.state.meetings.length);
        const {userMap, meetings} = this.state;
        const {navigate} = this.props.navigation;
        return (
            <Container style={{backgroundColor: '#fff',}}>
                <Content>
                    <List>
                        {meetings.map((mtg, idx) => {
                            let user = userMap.get(mtg.initiator);
                            return (
                                <ListItem key={idx} avatar>
                                    <Left>
                                        <Thumbnail source={{uri: user.avatar }}/>
                                    </Left>
                                    <Body>
                                    <Text>{user.name}</Text>
                                    <Text note>{mtg.meetingType} at {mtg.meetingLocation}</Text>
                                    <Text note>Requested on {mtg.begMeetingTime.toLocaleDateString()}</Text>
                                    </Body>
                                    <Right>
                                        <TouchableOpacity onPress={() => navigate('ToDoDetail', {userMap: userMap, meeting: mtg}) }>
                                            <Icon ios='ios-alert-outline' android="md-menu" style={{fontSize: 20, color: 'grey'}}/>
                                        </TouchableOpacity>
                                    </Right>

                                </ListItem>
                            )
                        })}

                    </List>
                </Content>
            </Container>
        )
    }
}