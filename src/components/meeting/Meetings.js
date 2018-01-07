import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Content, Icon, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import meetings from "../mockdata/meeting/MeetingData";
import Users from "../mockdata/user/User";


import {StackNavigator} from "react-navigation";
import MeetingList from "./MeetingList";
import MessageDetail from "./message/MessageDetail";


const NewMtg = StackNavigator(
    {
        MeetingList: {screen: MeetingList},
        MessageDetail: {screen: MessageDetail}
    }
);


export default NewMtg;
