import {GiftedChat} from 'react-native-gifted-chat';
import React, {Component} from 'react'
import { Container, Header, Content, Icon, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';

export default class NewMtg extends Component {

    state = {
        messages: [

        ]
    };

    componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/20478536_754964571341493_8693176032313737216_a.jpg',
          },
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
                    />

              </Container>
        )

  }

}
