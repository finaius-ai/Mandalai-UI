import {GiftedChat} from 'react-native-gifted-chat';
import React, {Component} from 'react'
import { Container, Header, Content, Icon, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import Messages from '../../mockdata/message/Message'

export default class MessageDetail extends Component {

    static navigationOptions = {
    title: 'Messaging',
    };

    state = {
        messages: [
        ],
    };

    componentWillMount() {
    this.setState({
         messages: [
            {
              _id: 1,
              text: 'When do you like to meet?',
              createdAt: new Date(),
              user: this.props.navigation.state.params.user,
            },
          ],
    });
  }

  onSend(messages = []){
        this.setState((prevState) => (
            {
                messages:GiftedChat.append(prevState.messages, messages)
            }
        ))
  }

  render() {
        const { params } = this.props.navigation.state;
        return (

              <Container>
                    <GiftedChat messages={this.state.messages}
                                onSend={(messages) => this.onSend(messages)}
                                user={{
                                    _id:1,
                                    name:"Rocky Xu",
                                    avatar:'https://scontent-dft4-2.cdninstagram.com/t51.2885-19/928642_1531465580399845_2020391934_a.jpg',
                                }}
                                showUserAvatar
                                enableEmptySections
                    />

              </Container>
        )

  }

}
