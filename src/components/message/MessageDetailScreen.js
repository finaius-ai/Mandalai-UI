/*
    This screen contains the chat UI for the APP.
    It receives an user object
 */
import React, {Component} from 'react'
import {GiftedChat} from 'react-native-gifted-chat';
import {Container} from 'native-base';

export default class MessageDetailScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: `Message with ${navigation.state.params.user.name}`,
    });

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
    }

    componentWillMount() {
        //Populate the message
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

    onSend(messages = []) {
        this.setState((prevState) => (
            {
                messages: GiftedChat.append(prevState.messages, messages)
            }
        ))
    }

  render() {
        return (

              <Container style={{backgroundColor: '#fff',}}>
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


