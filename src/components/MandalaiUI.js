import React from 'react';
import { StyleSheet, Image, Text, StatusBar } from 'react-native';
import { Container} from "native-base";
import TabNavigator from 'react-native-tab-navigator';
import Meetings from "./meeting/Meetings";
import Contacts from "./contacts/Contacts";
import NewMtg from "./meeting/message/NewMtg";
import Setting from "./settings/Setting";
import ToDos from "./todos/ToDos"
import {selectTab} from "../actions/actions";
import { connect } from 'react-redux'

const tabs = [
    {selectedTab: "new mtg", title:"new mtg", imageUri: require('../img/icons/NewMeetingMessage.png'), tabContent:(<NewMtg/>)},
    {selectedTab: "meetings", title:"meetings", imageUri: require('../img/icons/MeetingsIcon.png'), tabContent:(<Meetings/>)},
    {selectedTab: "todo list", title:"todo list", imageUri: require('../img/icons/ToDoIcon.png'), tabContent:(<ToDos/>)},
    {selectedTab: "contacts", title:"contacts", imageUri: require('../img/icons/ContactsIcon.png'), tabContent:(<Contacts/>)},
    {selectedTab: "settings", title:"settings", imageUri: require('../img/icons/SettingsIcon.png'), tabContent:(<Setting/>)}
];

class Home extends React.Component {

  render() {
    return (
              <Container>
                  <StatusBar hidden={true} />
                      <TabNavigator>
                        {tabs.map((tab, i) => (

                        <TabNavigator.Item
                            key={i}
                            selected = {this.props.tabName}
                            title={tab.title}
                            renderIcon={() =>
                                <Image
                                    source={tab.imageUri}
                                    style={styles.tabIcon}/>}
                            renderSelectedIcon={() =>
                                <Image
                                    source={tab.imageUri}
                                    style={[styles.tabIcon, {opacity:0.5}]}/>}

                            onPress={() => this.props.onChangeTab(tab.selectedTab)}
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

const mapStateToProps = (state) => ({
  tabName: state.selectedTab
});

const mapDispatchToProps = (dispatch) => ({
        onChangeTab: (tabName) => dispatch(selectTab(tabName))
}

);

const MandalaiUI =connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default MandalaiUI;