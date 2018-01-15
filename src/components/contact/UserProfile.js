import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, Image, ImageBackground, View} from 'react-native';
import {
    Container,
    Left,
    Button,
    Right,
    Content,
    Body,
    List,
    ListItem,
    Thumbnail,
    Icon,
    CheckBox,
    Header
} from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import Users from '../mockdata/user/User';


export default class UserProfile extends React.Component {
    static navigationOptions = {
        headerVisible: true,
    };

    render() {
        const {navigation} = this.props;
        const {user} = this.props.navigation.state.params;
        return (
            <Container style={{flex: 1, flexDirection: 'column', backgroundColor:"#fff"}}>
                <Header>
                    <Left>
                     <Button transparent
                            onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' style={{fontSize: 35}}/>
                    </Button>
                    </Left>
                    <Body><Text>Profile</Text></Body>
                    <Right><Text/></Right>
                </Header>

                    <Image style={styles.headerBackground} source={require('../../img/background.jpg')}/>

                    <View style={{flex:1, marginBottom:20}}>

                        <View style={styles.header}>
                            <CheckBox checked={true} style={{alignSelf: 'center'}}>
                            </CheckBox>

                            <View style={styles.profilepicWrap}>
                                <Image style={styles.profilepic} source={{uri: user.avatar}}/>
                            </View>

                            <Button transparent style={{alignSelf: 'center'}}>
                                <Entypo name='dots-three-horizontal' size={30}/>
                            </Button>
                        </View>
                    </View>

                    <View style={{flex: 1, justifyContent: 'flex-end', marginVertical:20}}>
                        <Text style={styles.name}> {user.name}</Text>
                        <Text style={styles.pos}> {user.occupation}</Text>
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
        flexDirection: "row",
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
        alignSelf: 'center'
    },

    button: {
        flex: 2,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'
    }
});