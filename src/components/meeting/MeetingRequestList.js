import React, { Component } from 'react';
import { ListView, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Icon, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import meetings from "../mockdata/meeting/MeetingData";
import Users from "../mockdata/user/User";
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    users: state.users,
    meetings: state.meetings
});


export class MeetingRequestList extends Component {
  constructor(props) {
      super(props);
      this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.props.meetings];
    newData.splice(rowId, 1);
    this.setState({ meetings: newData });
  }
  render() {
      const {meetings, users} = this.props;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <List
            dataSource={this.ds.cloneWithRows(meetings)}
            renderRow={(data) =>
              <ListItem avatar>
                <Left>
                <Thumbnail source={{ uri: users.get(data.initiator).avatar }} />
              </Left>
              <Body>

              <TouchableOpacity onPress={() => navigate('MessageDetail', {user :users.get(data.initiator) })}>
                <Text>{users.get(data.initiator).name}</Text>
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


export default connect(mapStateToProps)(MeetingRequestList)