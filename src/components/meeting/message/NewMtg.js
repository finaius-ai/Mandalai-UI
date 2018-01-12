import Autocomplete from 'react-native-autocomplete-input';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Users from '../../mockdata/user/User'
import { Container, Header, Left, Button, Right, Body, Content, List, ListItem, Thumbnail} from "native-base";
import UserCell from "./UserCell";
import MessageDetail from "./MessageDetail";
import MeetingList from "../MeetingList";
import {StackNavigator} from "react-navigation";

class MessageScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }
  findUser(q) {

  return Users.filter((user) => user.name.toLowerCase().indexOf(q.toLowerCase())  !==-1)

  }
  render() {
    const { navigate } = this.props.navigation;
    const { query } = this.state;
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
                        <UserCell user={user} onAddUser = {() => navigate('MessageDetail', {user : user })} />
                )}
            />

        </Container>
    );
  }
}

const NewMtg = StackNavigator(
    {
        SearchContact : {screen: MessageScreen},
        MessageDetail: {screen: MessageDetail}
    }
);



export default NewMtg;

