import React from 'react';
import { StyleSheet, Image, Text, StatusBar } from 'react-native';
import { Container} from "native-base";
import TabNavigator from 'react-native-tab-navigator';
import Meetings from "./src/components/Meetings";
import NewMtg from "./src/components/NewMtg";

//a walk around to use require dynamically

const tabs = [
    {selectedTab: "new mtg", title:"new mtg", imageUri: require('./src/img/icons/NewMeetingMessage.png'), tabContent:(<NewMtg/>)},
    {selectedTab: "meetings", title:"meetings", imageUri: require('./src/img/icons/MeetingsIcon.png'), tabContent:(<Meetings/>)},
    {selectedTab: "todo list", title:"todo list", imageUri: require('./src/img/icons/ToDoIcon.png'), tabContent:(<Text>todo list</Text>)},
    {selectedTab: "contacts", title:"contacts", imageUri: require('./src/img/icons/ContactsIcon.png'), tabContent:(<Text>contacts</Text>)},
    {selectedTab: "settings", title:"settings", imageUri: require('./src/img/icons/SettingsIcon.png'), tabContent:(<Text>settings</Text>)}
];

export default class App extends React.Component {

  state ={
            selectedTab: "meetings",
        };

  render() {
    return (
              <Container>
                  <StatusBar hidden={true} />
                      <TabNavigator>
                        {tabs.map((tab, i) => (

                        <TabNavigator.Item
                            key={i}
                            selected = {this.state.selectedTab === tab.selectedTab}
                            title={tab.title}
                            renderIcon={() =>
                                <Image
                                    source={tab.imageUri}
                                    style={styles.tabIcon}/>}
                            renderSelectedIcon={() =>
                                <Image
                                    source={tab.imageUri}
                                    style={[styles.tabIcon, {opacity:0.5}]}/>}

                            onPress={() => this.setState({selectedTab: tab.selectedTab })}
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
