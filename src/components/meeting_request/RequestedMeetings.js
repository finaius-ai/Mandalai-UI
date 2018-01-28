/*
    This component renders a list of meeting waiting for approval!
 */

import React, { Component } from 'react';
import { ListView, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Content, Icon, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import Users from "../mockdata/user/User";
import meetings from "../mockdata/meeting/MeetingData"
import {StackNavigator} from "react-navigation";
import MessageDetailScreen from "../message/MessageDetailScreen";

export class RequestedMeetingScreen extends Component {
    static navigationOptions = {
        title: 'meeting requests',
    };
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state= {
            users: {},
            meetings:[]
        }

    }

    componentDidMount() {
        const userMap = new Map(Users.map((user, index) => ([user._id, user])));
        const filteredMeetings = meetings.filter((mtg) => !mtg.approved);
        this.setState(
            {
                users: userMap,
                meetings: filteredMeetings
            });
    }

    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.meetings];
        newData.splice(rowId, 1);
        this.setState({meetings: newData});
    }

    render() {
        const {meetings, users} = this.state;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <Content>
                    <List
                        dataSource={this.ds.cloneWithRows(meetings)}
                        renderRow={(data, idx) =>
                            <ListItem avatar key={idx}>
                                <Left>
                                    <Thumbnail source={{uri: users.get(data.initiator).avatar}}/>
                                </Left>
                                <Body>

                                <TouchableOpacity
                                    onPress={() => navigate('MessageDetail', {user :users.get(data.initiator) })}>
                                    <Text style={{fontWeight: 'bold'}}>{users.get(data.initiator).name}</Text>
                                    <Text note>{data.meetingType}</Text>
                                    <Text note>Requested on {data.begMeetingTime.toLocaleDateString()}</Text>
                                </TouchableOpacity>

                                </Body>

                                <Right>
                                    <Text note>{data.requestedTime.toLocaleTimeString()}</Text>
                                </Right>
                            </ListItem>}
                        renderLeftHiddenRow={data =>
                            <Button full onPress={() => alert("added to the todo list!")}>
                                <Icon active name="ios-add-circle"/>
                            </Button>}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                                <Icon active name="trash"/>
                            </Button>}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                    />
                </Content>
            </Container>
        );

    }
}

const RequestedMeetings = StackNavigator(
    {
        RequestedMeetings: {screen: RequestedMeetingScreen},
        MessageDetail: {screen: MessageDetailScreen}
    }
);

export default RequestedMeetings;