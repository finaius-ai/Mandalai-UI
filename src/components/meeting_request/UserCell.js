/*
    Container for individual user when searched.
 */

import React from 'react';
import {Left, Button, Right, Body, Text, Content, List, ListItem, Thumbnail} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";


export default class UserCell extends React.Component {

    render(){
        const {user} = this.props;
        return(
            <ListItem avatar key={user._id}>
                <Left>
                    <Thumbnail source={{uri: user.avatar}}/>
                </Left>
                <Body>
                <Text>{user.name}</Text>
                <Text note>{user.phone}</Text>
                <Text/>
                </Body>
               <Right>
                   <Button transparent onPress= {this.props.onAddUser}>
                       <FontAwesome theme={{iconFamily: 'FontAwesome'}} name='plus' size={25}
                                    color={"grey"}/>
                   </Button>
              </Right>
            </ListItem>

        )
    }
}