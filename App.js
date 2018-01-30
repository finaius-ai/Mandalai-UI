import React from 'react';
import { StyleSheet, Image, Text, ImageBackground, View,StatusBar, TouchableOpacity} from 'react-native';
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
            loading: true,
            selectedTab: "meetings",
            loggedIn:false
        }
    }

    signIn(){
        this.setState({
            loading: false
        })
    }

  render() {

        if (this.state.loading){
            return (
                <View style={styles.imageContainer}>
                    <ImageBackground
                        style={{flex:1, justifyContent: 'space-around'}}
                        source={require('./src/img/icons/SplashScreen.png')}

                    >
                        <TouchableOpacity onPress={() => this.signIn()} style={styles.image}>

                            <View style={{backgroundColor: 'rgba(0,0,0,0)',}}>
                                <Image source={require('./src/img/icons/googleSignIn.png')} style={{height:30, width:30, alignSelf:"center"}}/>
                                <Text style={{fontSize:18, fontWeight:"bold"}}>Sign In</Text>
                            </View>
                        </TouchableOpacity>

                    </ImageBackground>

                </View>
            )
        }


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
                        onPress={() => this.setState({selectedTab: tab.selectedTab})}>
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
        width: 25,
        height: 25,
        margin: 3,

    },

    imageContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    image: {
        marginTop:20,
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"

    }
});

