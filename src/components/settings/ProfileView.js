import React, {Component} from 'react';
import {Image, View,  Text, Button} from 'react-native';
import {Container, Header, Content, ListItem, Thumbnail, Icon, H2, Left, Body, Right, Footer} from 'native-base';


export default class ProfileView extends Component {

    render() {
        const {user} = this.props;
        return (
            <View>
                <View>
                    <H2 style={{fontWeight: 'bold'}}>YOU:</H2>

                    <Thumbnail style={{marginVertical: 10}}
                               source={{uri: user.avatar}}/>
                    <View>
                        <Text>{user.name}</Text>
                        <Text>{user.occupation}</Text>
                        <Text>{user.phone}</Text>
                    </View>
                </View>
            </View>


        );
    }
}