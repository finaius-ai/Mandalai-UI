import React, {Component} from 'react'
import {
  StyleSheet, View, Image, TouchableHighlight, Dimensions
} from 'react-native';
import { Container, Text, Content} from 'native-base';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const num2Time = [
    "12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm",
    "1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm",];

export default class TimeSetting extends Component{

    state = {
        Dates: [
            {date: "Su", selected: true},
            {date: "M", selected: false},
            {date: "Tu", selected: true},
            {date: "W", selected: false},
            {date: "Th", selected: true},
            {date: "F", selected: true},
            {date: "Sa", selected: false},
        ],
        multiSliderValue: [2, 20],
        begNum: num2Time[2],
        endNum: num2Time[20]

    };

    multiSliderValuesChange = (values) => {
        this.setState({
            multiSliderValue: values,
            begNum: num2Time[values[0]],
            endNum: num2Time[values[1]]
        });
    };

    render(){
        const {multiSliderValue} = this.state;
        const {height, width} = Dimensions.get('window');
        return (
            <Container style={{backgroundColor: '#fff',}}>
                <Content>
                    <View style={{flex:1, justifyContent: "center",}}>
                    <View style={styles.datesContainer}>
                    {this.state.Dates.map((date, index) => {
                            let backGroundColor = '#fff';
                            let textColor = "black";
                            if (date.selected) {
                                backGroundColor = "#444a95";
                                textColor = "white";
                            }
                            return (
                                <TouchableHighlight style={[styles.badger, {backgroundColor: backGroundColor,}]}
                                                    key={index}>
                                    <Text style={{
                                        flex:1,
                                        textAlign: 'center',
                                        color: textColor,
                                        fontWeight: 'bold',
                                        margin: 2,
                                        alignSelf:"center"
                                    }}>{date.date}</Text>
                                </TouchableHighlight>
                            )
                        }
                    )}

                    </View>

                    </View>

                    <View style={{flex:1}}>
                        <View style={styles.timeLabel}>
                            <Text>Coffee Time</Text>
                            <Text style={{textAlign: "right"}}>{this.state.begNum} to {this.state.endNum}</Text>
                        </View>
                        <MultiSlider
                            values={[multiSliderValue[0], multiSliderValue[1]]}
                            sliderLength={width}
                            onValuesChange={this.multiSliderValuesChange}
                            min={0}
                            max={23}
                            step={1}
                            style={{flex:1}}
                        />
                    </View>
                </Content>

            </Container>

        )
    }
}

const styles = StyleSheet.create({

    datesContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent: "center",
        flexWrap:"wrap",
        marginHorizontal:20,
    },
    badger: {
        height: 45,
        width: 45,
        borderRadius: 24,
        borderWidth: 5,
        borderColor: '#444a95',
        marginHorizontal:8,

    },

        timeLabel:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:24
    }
});