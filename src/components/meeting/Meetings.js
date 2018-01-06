import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Content, Icon, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';

const mockData = [
    {name:'Emma Mignolet', imageUri:'https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/17439302_1344601418964692_1301302449906122752_a.jpg'},
    {name:'Olivia Clyne',imageUri:'https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/12224236_1112881785403726_2020190651_a.jpg'},
    {name:'Ava Lovren', imageUri:'https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/20633390_111779502818858_880124432008347648_n.jpg'},
    {name:'Isabella Sakho', imageUri: 'https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/23596354_2020140128202306_3292593990074892288_n.jpg'},
    {name:'Mia Moreno', imageUri: 'https://scontent-dft4-2.cdninstagram.com/t51.2885-19/11325388_1648468402065596_143602565_a.jpg' },
    {name:'Emre Can', imageUri:'https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/17438260_1810227349303544_8632393496226955264_a.jpg', },
    {name:'Abigail Allen', imageUri:'https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/12751248_1733813756854933_2051763264_a.jpg' },
    {name:'Emily Coutinho', imageUri:'https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/23416970_310018979479797_739607477338767360_n.jpg' },
    {name:"Charlotte Jones", imageUri: 'https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/14607030_157268334737185_7423188889042419712_a.jpg'},
    {name:"Harper Dillion", imageUri: 'https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/17882610_1302382303183296_7289216107322277888_a.jpg'},

];



export default class Meetings extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: mockData,
    };
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


