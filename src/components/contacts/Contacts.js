import React from 'react';
import { StyleSheet, Image, Text, StatusBar } from 'react-native';
import { Container, Header, Left, Button, } from "native-base";
import Users from '../mockdata/user/User';

export default class Contacts extends React.Component {

    state={
        users : []
    };

    componentDidMount(){
        this.setState(()=>{
            const users = Users;
            return {users:users}

        })
    }


    render(){

        return (
            <Container>
                <Header>
                    <Left>
                        <Button rounded style={{color: 'green'}} />
                    </Left>
                </Header>

                {this.state.users.map((user) => (



                    <Text key={user.id_}>{user.name}</Text>



                ))}
            </Container>
        )
    }
}