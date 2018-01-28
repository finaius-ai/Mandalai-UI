import React, {Component} from 'react'
import {
    StyleSheet, View, Image, TouchableHighlight, Dimensions,
} from 'react-native';
import {Text } from 'native-base';
import {TextInput } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
const num2Time = [
    "12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm",
    "1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm",];

export default class TimeOfDay extends Component {

    state = {
        multiSliderValue: [2, 20],
        begNum: num2Time[2],
        endNum: num2Time[20],
        meetingType: 'coffee time...',
    };
    multiSliderValuesChange = (values) => {
        this.setState({
            multiSliderValue: values,
            begNum: num2Time[values[0]],
            endNum: num2Time[values[1]]
        });
    };

    render() {
        const {multiSliderValue} = this.state;
        const {height, width} = Dimensions.get('window');
        return (
            <View style={{flex:1, alignItems:"center"}}>
                <View style={styles.timeLabel}>
                    <TextInput
                        style={{height: 30, borderColor: 'gray', borderWidth: 1, minWidth:200, marginHorizontal:15}}
                        maxLength = {80}
                        onChangeText={(meetingType) => this.setState({meetingType})}
                        value={this.state.meetingType}/>
                    <Text style={{textAlign: "right", marginHorizontal:15}}>{this.state.begNum} to {this.state.endNum}</Text>
                </View>
                <View>
                    <MultiSlider
                        values={[multiSliderValue[0], multiSliderValue[1]]}
                        sliderLength={width * 0.9}
                        onValuesChange={this.multiSliderValuesChange}
                        min={0}
                        max={23}
                        step={1}
                    />
                </View>

            </View>

        )

    }

}


const styles = StyleSheet.create({
        timeLabel:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:24
    }
});