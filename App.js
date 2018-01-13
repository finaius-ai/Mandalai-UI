import React from 'react';
import { StyleSheet, Image, Text, StatusBar } from 'react-native';
import {Container} from "native-base";
import TabNavigator from 'react-native-tab-navigator';
import MeetingRequests from "./src/components/meeting/MeetingRequests";
import Contacts from "./src/components/contacts/Contacts";
import NewMtg from "./src/components/meeting/message/NewMtg";
import Setting from "./src/components/settings/Setting";
import Todos from "./src/components/todos/ToDos";
import reducer from "./src/reducers/reducers";
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const tabs = [
    {selectedTab: "new mtg", title:"new mtg", imageUri: require('./src/img/icons/NewMeetingMessage.png'), tabContent:(<NewMtg/>)},
    {selectedTab: "meetings", title:"meetings", imageUri: require('./src/img/icons/MeetingsIcon.png'), tabContent:(<MeetingRequests store={this.props.store}/>)},
    {selectedTab: "todo list", title:"todo list", imageUri: require('./src/img/icons/ToDoIcon.png'), tabContent:(<Todos/>)},
    {selectedTab: "contacts", title:"contacts", imageUri: require('./src/img/icons/ContactsIcon.png'), tabContent:(<Contacts/>)},
    {selectedTab: "settings", title:"settings", imageUri: require('./src/img/icons/SettingsIcon.png'), tabContent:(<Setting/>)}
];

export class App extends React.Component {

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


const store = createStore(reducer);

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default Root;