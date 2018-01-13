import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Content, Icon, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';


import {StackNavigator} from "react-navigation";
import MeetingList from "./MeetingRequestList";
import MessageDetail from "./message/MessageDetail";


const MeetingRequests = StackNavigator(
    {
        MeetingList: {screen: MeetingList},
        MessageDetail: {screen: MessageDetail}
    }
);

class MeetingRequest extends Component {
    render(){
        return(
            <MeetingRequests store={this.props.store}/>
        )
    }
}

export default MeetingRequests;
