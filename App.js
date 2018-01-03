import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import NewMtg from "./src/components/NewMtg";
import Meetings from "./src/components/Meetings";
import ToDoList from "./src/components/ToDoList";
import Contacts from "./src/components/Contacts";
import Settings from "./src/components/settings/Settings";



export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            selectedTab: "meetings"
        }
    }
  render() {
    return (
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'new mtg'}
            title="new mtg"
            renderIcon={() => <Image source={require('./src/img/icons/NewMeetingMessage.png')} style={styles.tabIcon}/>}
            renderSelectedIcon={() => <Image source={require('./src/img/icons/NewMeetingMessage.png')} style={styles.tabIcon}/>}
            onPress={() => this.setState({ selectedTab: 'new mtg' })}>

              <NewMtg/>

          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'meetings'}
            title="meetings"
            renderIcon={() => <Image source={require('./src/img/icons/MeetingsIcon.png')} style={styles.tabIcon}/>}
            renderSelectedIcon={() => <Image source={require('./src/img/icons/MeetingsIcon.png')} style={styles.tabIcon}/>}
            onPress={() => this.setState({ selectedTab: 'meetings' })}>

              <Meetings/>

          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'todo list'}
            title="todo list"
            renderIcon={() => <Image source={require('./src/img/icons/ToDoIcon.png')} style={styles.tabIcon}/>}
            renderSelectedIcon={() => <Image source={require('./src/img/icons/ToDoIcon.png')} style={styles.tabIcon}/>}
            onPress={() => this.setState({ selectedTab: 'todo list' })}>

              <ToDoList/>

          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'contacts'}
            title="contacts"
            renderIcon={() => <Image source={require('./src/img/icons/ContactsIcon.png')} style={styles.tabIcon}/>}
            renderSelectedIcon={() => <Image source={require('./src/img/icons/ContactsIcon.png')} style={styles.tabIcon}/>}
            onPress={() => this.setState({ selectedTab: 'contacts' })}>

              <Contacts/>

          </TabNavigator.Item>


          <TabNavigator.Item
            selected={this.state.selectedTab === 'settings'}
            title="settings"
            renderIcon={() => <Image source={require('./src/img/icons/SettingsIcon.png')} style={styles.tabIcon}/>}
            renderSelectedIcon={() => <Image source={require('./src/img/icons/SettingsIcon.png')} style={styles.tabIcon}/>}
            onPress={() => this.setState({ selectedTab: 'settings' })}>

              <Settings/>

          </TabNavigator.Item>
        </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

    tabIcon: {
        width:25,
        height:25
    }
});
