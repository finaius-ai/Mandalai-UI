/*
    This tab contains the contact list and can navigate to user profile
 */
import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity, ListView} from 'react-native';
import { Container, Header, Left, Button, Right, Body,Icon, Content, List, ListItem, Thumbnail, Text} from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {StackNavigator} from 'react-navigation';
import Users from '../mockdata/user/User';
import { NavigationActions } from 'react-navigation'
import { addNavigationHelpers } from 'react-navigation';
import { combineReducers, createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import UserProfile from "./UserProfile";

class ContactScreen extends Component {

    static navigationOptions = {
        headerVisible: false,
    };

    constructor() {
        super();
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            users: [],
            aiMasterSwitch: true
        };
    }

    componentDidMount() {
        this.setState(() => {
            let users = Users;
            return {users: users}
        });
        this.props.navigation.setParams({
            switch: this.aiSwitchAll,
        });
    }

    aiSwitch(user, idx){
       user.aiSwitch = !user.aiSwitch;
       //console.log(user.aiSwitch);
       this.setState((prevState) => {
           let users = prevState.users;
           users[idx] = user;
           return users
       })
    }

    aiSwitchAll = () => {

        this.setState((prevState) => {
            let users = prevState.users.map((user) => {
                user.aiSwitch = !prevState.aiMasterSwitch;
                return user
            });
            return {
                users: users,
                aiMasterSwitch: !prevState.aiMasterSwitch
            }
        })
    };

    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.meetings];
        newData.splice(rowId, 1);
        this.setState({meetings: newData});
    }

    render(){
        //console.log(this.props);
        return (
            <Container>
                <Header sbackgroundColor={"white"}>
                    <Left>
                        <Button transparent onPress={() => this.aiSwitchAll()}>
                            <FontAwesome theme={{iconFamily: 'FontAwesome'}} name='circle' size={35} color={this.state.aiMasterSwitch ? "green" : "red"} />
                        </Button>
                    </Left>
                    <Body>
                        <Text>contacts</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => navigate ('Profile')}>
                            <Entypo name='dots-three-horizontal' size={30} />
                        </Button>
                    </Right>
                </Header>
                <Content style={{backgroundColor: "#fff"}}>
                        <List
                            dataSource={this.ds.cloneWithRows(Users)}
                            renderRow={(user, idx) => (
                                    <ListItem  avatar key={user._id}>
                                        <Left>
                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.navigate('UserProfile', {user: user})}>
                                                <Thumbnail source={{uri: user.avatar}}/>
                                            </TouchableOpacity>
                                        </Left>
                                        <Body>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('UserProfile', {user: user})}>
                                            <Text style={{fontWeight: 'bold'}}>{user.name}</Text>
                                            <Text note>{user.occupation}</Text>
                                            <Text note>{user.phone}</Text>
                                        </TouchableOpacity>
                                        </Body>
                                        <Right>
                                            <Button transparent onPress={()=>{this.aiSwitch(user, idx)}}>
                                                <FontAwesome theme={{iconFamily: 'FontAwesome'}} name='circle' size={30} color={user.aiSwitch ? "green" : "red"} />
                                            </Button>
                                        </Right>
                                    </ListItem>
                            )}

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

const ContactNavigator = StackNavigator(
    {
        Contacts: {screen: ContactScreen,},
        UserProfile: {screen: UserProfile}
    },
    {
    headerMode: 'none',

}

);

export default ContactNavigator;