import {GiftedChat} from 'react-native-gifted-chat';
import React, {Component} from 'react'
import {Button} from 'react-native'
import { Container, Header, Content, Icon, List, ListItem, Left, Right, Thumbnail, Text} from 'native-base';

export default class MainScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Elon"
        />
      </Container>
    );
  }

}
