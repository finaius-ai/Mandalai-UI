import React from 'react';
import { StyleSheet, Image, Text, StatusBar } from 'react-native';
import { Container, Header, Left, Button, Right, Body, Content, List, ListItem, Thumbnail} from "native-base";
import Users from '../mockdata/user/User';




export default class UserProfile extends React.Component {


    static navigationOptions = {
        header: {visibile: true}
    };

    render() {
        return (
            <Container>
                <Header/>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Body>
                    <Text>User Name</Text>
                    </Body>
                </View>
            </Container>
        );
    }
}

