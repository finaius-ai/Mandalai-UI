import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, Image, ImageBackground, View} from 'react-native';
import { Container, Left, Button, Right, Body, Content, List, ListItem, Thumbnail, Icon, CheckBox} from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import Users from '../mockdata/user/User';




export default class UserProfile extends React.Component {


    static navigationOptions = {

    };

    render() {
        return (
            <Container style={{flex: 1, flexDirection: 'column'}}>

                <Image style={styles.headerBackground} source={require('../img/background.jpg')} />


                <View style={{padding: 20 }}>

                    <View style={styles.header}>
                        <CheckBox checked={true} style={{ alignSelf: 'center'}}>
                        </CheckBox>

                        <View style={styles.profilepicWrap}>
                            <Image style={styles.profilepic} source={require('../img/profile.jpg')}/>
                        </View>

                        <Button transparent style={{ alignSelf: 'center'}}>
                            <Entypo name='dots-three-horizontal' size={30} />
                        </Button>
                    </View>
                </View>

                <View style={{flex:1, justifyContent: 'flex-end', padding: 20}}>
                    <Text style={styles.name}> Elon Musk</Text>
                    <Text style={styles.pos}> Founder, Tesla/SpaceX</Text>
                </View>

                <View style={styles.button}>
                    <Button transparent>
                        <Entypo name='new-message' style={{fontSize: 35, color: 'grey'}}/>
                    </Button>
                    <Button transparent>
                        <Icon name='logo-linkedin' style={{fontSize: 35}}/>
                    </Button>
                    <Button transparent>
                        <Icon name='logo-facebook' style={{fontSize: 35}}/>
                    </Button>
                    <Button transparent>
                        <Icon name='logo-twitter' style={{fontSize: 35}}/>
                    </Button>
                </View>


            </Container>
        );
    }
}

const styles = StyleSheet.create({
    headerBackground: {
        flex: 2,
        width: null,
        alignSelf: 'stretch'
    },
    header: {
        flex: 2,
        flexDirection:"row",
        justifyContent: 'space-between'
    },
    profilepicWrap: {
        width: 200,
        height: 200,
        alignSelf: 'center'

    },
    profilepic: {
        flex: 3,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 4,
    },
    name: {
        marginTop: 15,
        fontSize: 16,
        color: '#1d62c0',
        fontWeight: 'bold',
        alignSelf: 'center'

    },
    pos: {

        fontSize: 18,
        color: '#1d62c0',
        fontWeight: '300',
        fontStyle: 'italic',
        alignSelf:'center'
    },

    button: {
        flex:2,
        flexDirection:'row',
        alignItems:"center",
        justifyContent: 'center'
    }
});
