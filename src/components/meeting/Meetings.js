import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Content, Icon, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import meetings from "../mockdata/meeting/MeetingData";
import Users from "../mockdata/user/User";

export default class Meetings extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: meetings,
    };
  }

  componentDidMount(){
      const userMap = new Map(Users.map((user, index) => ([user.id_, user])))
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Header />
        <Content>
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={(data) =>
              <ListItem avatar>
                <Left>
                <Thumbnail source={{ uri: data.imageUri }} />
              </Left>
              <Body>
                <Text>{data.name}</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
               <Right>
                <Text note>3:43 pm</Text>
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


