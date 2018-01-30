/*
    This screen contains the chat UI for the APP.
    It receives an user object
 */
import React, {Component} from 'react'
import {StyleSheet, Platform, View} from 'react-native'
import {GiftedChat, Bubble,Actions, SystemMessage} from 'react-native-gifted-chat';
import {Container, Button , Card, CardItem, Body, Text} from 'native-base';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CalendarMessage from "./CalendarMessage";

export default class MessageDetailScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: `Message with ${navigation.state.params.user.name}`,
    });

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            aiSwitch: true
        };
        this.renderBubble = this.renderBubble.bind(this);
        this.renderCustomActions = this.renderCustomActions.bind(this);
        this.renderSystemMessage = this.renderSystemMessage.bind(this);
    }

    switchAi(){
        this.setState((prevState) => {
            return {aiSwitch: !prevState.aiSwitch}
        });

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
                {
                _id: Math.round(Math.random() * 1000000),
                text: "Your Available Time",
                createdAt: new Date(),
                system: true,
            }

            ],
        });
    }



    renderSystemMessage(props) {
        return (
        <View>
            <SystemMessage
                {...props}
                containerStyle={{
                    marginBottom: 15,
                }}
                textStyle={{
                    fontSize: 14,
                }}
            />
            <CalendarMessage/>

        </View>

        );
    }

    renderCustomActions(props) {

        return (
            <View style={{marginHorizontal:5}}>
                <Button transparent onPress={() => this.switchAi()}>
                    <FontAwesome theme={{iconFamily: 'FontAwesome'}} name='circle' size={35}
                                 color={this.state.aiSwitch ? "green" : "red"}/>
                </Button>
            </View>
        );

    }

    renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: '#a8d1f0',
                    }
                }}
            />
        );
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
                                renderActions={this.renderCustomActions}
                                renderBubble={this.renderBubble}
                                renderSystemMessage={this.renderSystemMessage}
                                showUserAvatar
                                enableEmptySections
                    />

              </Container>
        )

  }

}
