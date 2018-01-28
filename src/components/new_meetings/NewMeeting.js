/*
    This file contains the root navigator of the the New Meeting Screen to Message Detail.

 */
import React, { Component } from 'react';
import Users from '../mockdata/user/User'
import { Container, Text} from "native-base";
import {StackNavigator} from "react-navigation";
import MessageDetailScreen from "../message/MessageDetailScreen";
import Autocomplete from "../meeting_request/Autocomplete";
import UserCell from "../meeting_request/UserCell";

class NewMeetingScreen extends Component {

    static navigationOptions = ({
        title: "new meeting",
    });

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    findUser(q) {
        return Users.filter((user) => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1)
    }

    render() {
        const {navigate} = this.props.navigation;
        const {query} = this.state;
        const users = this.findUser(query);
        return (
            <Container style={{backgroundColor: '#fff',}}>
                <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    data={users}
                    defaultValue={query}
                    onChangeText={text => this.setState({query: text})}
                    placeholder="Search Contacts"
                    renderItem={(user) => (
                        <UserCell user={user} onAddUser={() => navigate('MessageDetail', {user: user})}/>
                    )}
                />

            </Container>
        );
    }
}

const NewMeeting = StackNavigator(
    {
        NewMeeting : {screen: NewMeetingScreen},
        MessageDetail: {screen: MessageDetailScreen}
    }
);

export default NewMeeting;