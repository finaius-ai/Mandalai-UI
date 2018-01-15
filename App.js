import React from 'react';
import { StyleSheet, Image, Text, StatusBar } from 'react-native';
import {Container} from "native-base";
import TabNavigator from 'react-native-tab-navigator';
import NewMeeting from './src/components/new_meetings/NewMeeting'
import RequestedMeetings from "./src/components/meeting_request/RequestedMeetings";
import TodoList from "./src/components/todos/TodoList";
import Setting from "./src/components/settings/Setting";
import Contacts from "./src/components/contact/Contacts"
/*
    This list holds the tabs data. It greatly reduces the code length.
 */
const tabs = [
    {selectedTab: "new mtg", title:"new mtg", imageUri: require('./src/img/icons/NewMeetingMessage.png'), tabContent:(<NewMeeting/>)},
    {selectedTab: "meetings", title:"meetings", imageUri: require('./src/img/icons/MeetingsIcon.png'), tabContent:(<RequestedMeetings/>)},
    {selectedTab: "todo list", title:"todo list", imageUri: require('./src/img/icons/ToDoIcon.png'), tabContent:(<TodoList/>)},
    {selectedTab: "contacts", title:"contacts", imageUri: require('./src/img/icons/ContactsIcon.png'), tabContent:(<Contacts/>)},
    {selectedTab: "settings", title:"settings", imageUri: require('./src/img/icons/SettingsIcon.png'), tabContent:(<Setting/>)}
];

export default class App extends React.Component {

    // Put the state in the constructor
    constructor(){
        super();
        this.state = {
            selectedTab: "meetings",
        }
    }

  render() {
    return (
        <Container>
            <StatusBar hidden={true}/>
            <TabNavigator>
                {tabs.map((tab, i) => (

                    <TabNavigator.Item
                        key={i}
                        selected={this.state.selectedTab === tab.selectedTab}
                        title={tab.title}
                        renderIcon={() =>
                            <Image
                                source={tab.imageUri}
                                style={styles.tabIcon}/>}
                        renderSelectedIcon={() =>
                            <Image
                                source={tab.imageUri}
                                style={[styles.tabIcon, {opacity: 0.5}]}/>}

                        onPress={() => this.setState({selectedTab: tab.selectedTab})}
                    >
                        {tab.tabContent}
                    </TabNavigator.Item>

                ))}
            </TabNavigator>
        </Container>


    );
  }
}

const styles = StyleSheet.create({
    tabIcon: {
        width:25,
        height:25,
        margin:3,

    }
});

