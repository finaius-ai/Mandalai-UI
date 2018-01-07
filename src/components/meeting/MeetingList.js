import React, { Component } from 'react';
import { ListView, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Icon, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import meetings from "../mockdata/meeting/MeetingData";
import Users from "../mockdata/user/User";

export default class MeetingList extends Component {
  constructor(props) {
      super(props);
      this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
          basic: true,
          users: {},
          meetings: [],
      };
  }
  componentDidMount(){
      const userMap = new Map(Users.map((user, index) => ([user._id, user])));
      const filteredMeetings = meetings.filter((mtg)=> !mtg.approved);
      this.setState(() => (
          {
          users: userMap,
          meetings: filteredMeetings
      }
      ));
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.meetings];
    newData.splice(rowId, 1);
    this.setState({ meetings: newData });
  }
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <List
            dataSource={this.ds.cloneWithRows(this.state.meetings)}
            renderRow={(data) =>
              <ListItem avatar>
                <Left>
                <Thumbnail source={{ uri: this.state.users.get(data.initiator).avatar }} />
              </Left>




              <Body>

              <TouchableOpacity onPress={() => navigate('MessageDetail', {user : this.state.users.get(data.initiator) })}>
                <Text>{this.state.users.get(data.initiator).name}</Text>
                <Text note>{data.meetingType}</Text>
              </TouchableOpacity>

              </Body>






               <Right>
                <Text note>{data.requestedTime.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true })}</Text>
              </Right>
              </ListItem>}
                renderLeftHiddenRow={data =>
                  <Button full onPress={() => alert(data)}>
                    <Icon active name="information-circle" />
                  </Button>}
                renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                  <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                    <Icon active name="trash" />
                  </Button>}
                leftOpenValue={75}
                rightOpenValue={-75}
          />
        </Content>
      </Container>
    );
  }
}


