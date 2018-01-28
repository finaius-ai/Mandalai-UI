/*
    This tab contains a list of meetings approved by the user
 */
import React, { Component } from 'react';
import {ListView, TouchableOpacity} from "react-native";
import { Container, Header, Content, List,Thumbnail, ListItem, Left, Body,Button, Right,Icon,  Text } from 'native-base';
import meetings from '../mockdata/meeting/MeetingData';
import Users from "../mockdata/user/User";
import {StackNavigator} from "react-navigation";
import TodoDetailScreen from "./TodoDetailScreen";

class TodoListScreen extends Component {
    static navigationOptions = ({
        title: "todo list"
    });
    constructor() {
        super();
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


    render(){
        //console.log(this.state.meetings.length);
        const {users, meetings} = this.state;
        const {navigate} = this.props.navigation;
        return (
            <Container style={{backgroundColor: '#fff',}}>
                <Content>
                    <List
                        dataSource={this.ds.cloneWithRows(meetings)}
                        renderRow={(mtg) => {
                            let user = users.get(mtg.initiator);
                            return (
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={{uri: user.avatar}}/>
                                    </Left>
                                    <Body>
                                    <Text style={{fontWeight: 'bold'}}>{user.name}</Text>
                                    <Text note>{mtg.meetingType} at {mtg.meetingLocation}</Text>
                                    <Text note>Requested on {mtg.begMeetingTime.toLocaleDateString()}</Text>
                                    </Body>
                                    <Right>
                                        <TouchableOpacity
                                            onPress={() => navigate('ToDoDetail', {userMap: users, meeting: mtg})}>
                                            <Icon ios='ios-alert-outline' android="md-menu"
                                                  style={{fontSize: 20, color: 'grey'}}/>
                                        </TouchableOpacity>
                                    </Right>

                                </ListItem>

                            )

                        }}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                                <Icon active name="trash"/>
                            </Button>}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                        />
                </Content>
            </Container>
        )
    }
}

const TodoList = StackNavigator({
    TodoList: {screen: TodoListScreen},
    ToDoDetail: {screen: TodoDetailScreen}
});

export default  TodoList;