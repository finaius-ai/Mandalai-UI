import React, {Component} from 'react'
import {Text, Image, StyleSheet} from "react-native"
import {TabNavigator} from 'react-navigation';


export class NewMtgScreen extends Component{

    static navigationOptions = {
        tabBarLabel: "new mtg",
        tabBarIcon: ({tintColor}) => (

            <Image
                source={require('../../img/icons/NewMeetingMessage.png')}
                style={[styles.icon]}
            />
        )
    };


    render() {
        return (
            <Text>NewMtgScreen</Text>
        )
    }



}

export class MeetingScreen extends Component{

    static navigationOptions = {
        tabBarLabel: "meetings",
        tabBarIcon: () => (
            <Image
                source={require('../../img/icons/MeetingsIcon.png')}
                style={styles.icon}
            />
        )
    };


    render() {
        return (
            <Text>Meeting Screen</Text>
        )
    }



}

export class TodoScreen extends Component{

    static navigationOptions = {
        tabBarLabel: "todos",
        tabBarIcon: () => (
            <Image
                source={require('../../img/icons/ToDoIcon.png')}
                style={styles.icon}
            />
        )
    };


    render() {
        return (
            <Text>Todo Screen</Text>
        )
    }



}

export class ContactScreen extends Component{

    static navigationOptions = {
        tabBarLabel: "contacts",
        tabBarIcon: () => (
            <Image
                source={require('../../img/icons/ContactsIcon.png')}
                style={styles.icon}
            />
        )
    };


    render() {
        return (
            <Text>Contact Screen</Text>
        )
    }



}
export class SettingScreen extends Component{

    static navigationOptions = {
        tabBarLabel: "setting",
        tabBarIcon: () => (
            <Image
                source={require('../../img/icons/SettingsIcon.png')}
                style={styles.icon}
            />
        )
    };


    render() {
        return (
            <Text>Setting Screen</Text>
        )
    }



}


const TabScreens = TabNavigator({

    NewMtg: {screen: NewMtgScreen},
    Meeting: {screen: MeetingScreen},
    Todo: {screen: TodoScreen},
    Contact: {screen: ContactScreen},
    Setting: {screen: SettingScreen}

}, {
    tabBarPosition: "bottom",
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: 'blue',
        upperCaseLabel: false,
        tabStyle:{marginHorizontal:5},
        style: {backgroundColor: 'white'},
        showIcon: true,
        labelStyle: {fontSize:10}


    }
});


const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

export default  TabScreens;