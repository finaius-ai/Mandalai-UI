import React from 'react';
import { StyleSheet, Image, Text, StatusBar } from 'react-native';
import { Container, Header, Left, Button, Right, Body, Content, List, ListItem, Thumbnail} from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {StackNavigator} from 'react-navigation';


import Users from '../mockdata/user/User';
import UserProfile from "./UserProfile";

class ContactScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;

        let headerLeft = (
            <Button transparent onPress={() => params.switch()}>
                <FontAwesome theme={{iconFamily: 'FontAwesome'}} name='circle' size={35} color={ color} />
            </Button>
        );
        return {headerLeft};

    };


    state={
        users : [],
        aiMasterSwitch: true
    };




    async componentDidMount(){
        this.setState(()=>{
            let users = Users;
            return {users:users}
        });

        this.props.navigation.setParams({
            switch : this.aiSwitchAll,
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


    render(){
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.aiSwitchAll()}>
                            <FontAwesome theme={{iconFamily: 'FontAwesome'}} name='circle' size={35} color={this.state.aiMasterSwitch ? "green" : "red"} />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{fontWeight: 'bold'}}>contacts</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => navigate ('Profile')}>
                            <Entypo name='dots-three-horizontal' size={30} />
                        </Button>
                    </Right>
                </Header>
                <Content>

                        <List>
                            {this.state.users.map((user, idx) => (
                                    <ListItem  avatar key={user._id}>
                                        <Left>
                                            <Thumbnail source={{uri:user.avatar}} />
                                        </Left>
                                        <Body>
                                            <Text style={{fontWeight: 'bold'}}>{user.name}</Text>
                                            <Text note>{user.occupation}</Text>
                                            <Text note>{user.phone}</Text>
                                        </Body>
                                        <Right>
                                            <Button transparent onPress={()=>{this.aiSwitch(user, idx)}}>
                                                <FontAwesome theme={{iconFamily: 'FontAwesome'}} name='circle' size={30} color={user.aiSwitch ? "green" : "red"} />
                                            </Button>
                                        </Right>
                                    </ListItem>
                            ))}
                        </List>

                </Content>

            </Container>
        )
    }
}

const Contacts = StackNavigator(
    {
        Home: {screen: ContactScreen,},
        Profile: {screen: UserProfile}
    },

);

export default Contacts;