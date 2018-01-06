import {GiftedChat} from 'react-native-gifted-chat';
import React, {Component} from 'react'
import { Container, Header, Content, Icon, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import {StackNavigator} from "react-navigation";
import MainScreen from "./MainScreen";
import ChatScreen from "./ChatScreen";

const NewMtg = StackNavigator(
    {
        Home: {screen: MainScreen},
        Chat: {screen: ChatScreen}
    }
);


export default NewMtg;