import React, { Component } from 'react';
import {Image, View,  Text, Button, StyleSheet} from 'react-native';
import { Container, Header, Body, Content, List, ListItem,H2, Separator } from 'native-base';
import ProfileView from "./ProfileView";
import Users from "../mockdata/user/User"
import MtgReqView from "./MtgReqView";
import DateOfWeek from "./setReqs/TimeSetting";


export default class SettingScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    state = {
        user: Users[Math.floor(Math.random() * 9)]
    };

  render() {
      const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Content>
          <ListItem>
            <ProfileView user={this.state.user}/>
          </ListItem>
          <ListItem>

              <View style={{flex:1, justifyContent:"space-between"}}>
                      <H2 style={{fontWeight: 'bold'}}>YOUR UNIVERSE:</H2>

                      {this.state.user.setting.sourceMedium.map((medium, idx) => {
                        return(
                      <View style={{flex:1, justifyContent:"space-between", flexDirection:"row"}} key={idx}>
                          <Text>{medium.source}</Text>
                          <Text>{medium.connected ? "Connected" : "Click to Connect"}</Text>
                      </View>
                        )
                      })}
              </View>


          </ListItem>


            <ListItem>

                <View style={{flex: 1, justifyContent:"space-between"}}>
                    <H2 style={{fontWeight: 'bold'}}>YOUR REMINDERS:</H2>

                    {this.state.user.setting.reminderMethod.map((method, idx) => {
                        return (
                            <View style={{flex: 1, justifyContent: "space-between", flexDirection: "row"}} key={idx}>
                                <Text>via {method.source}</Text>
                                <Text>via {method.connected ? "Connected" : "Click to Connect"}</Text>
                            </View>
                        )
                    })}

                    {this.state.user.setting.remindingTime.map((time, idx) => {
                        return (
                            <View style={{flex: 1, justifyContent: "space-between", flexDirection: "row"}} key={idx}>
                                <Text>{time.type}</Text>
                                <Text>{time.reminderTime}</Text>
                            </View>
                        )
                    })}

                </View>



            </ListItem>
            <ListItem>
                <MtgReqView user={this.state.user}/>

            </ListItem>
            <ListItem>
                <Button
                    title={'Add More'}
                    onPress={() => navigate('TimeSetting', {user: this.state.user})}
                    style={{alignSelf:"center"}}
                />
            </ListItem>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});