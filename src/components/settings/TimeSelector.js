import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import React, {Component} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';


const time = [
    "00:00 am", "01:00 am", "02:00 am", "03:00 am","04:00 am", "05:00 am",
    "06:00 am", "07:00 am","08:00 am", "09:00 am", "10:00 am", "11:00 am",
    "12:00 pm", "01:00 pm", "02:00 pm", "03:00 pm","04:00 pm", "05:00 pm",
    "06:00 pm", "07:00 pm","08:00 pm", "09:00 pm", "10:00 pm", "11:00 pm",];


export default class TimeSelector extends Component {
    state ={
            multiSliderValue: [2, 20],
            begNum: time[2],
            endNum: time[20]
        };

    multiSliderValuesChange = (values) => {
    this.setState({
      multiSliderValue: values,
      begNum: time[values[0]],
      endNum:time[values[1]]
    });
  };

   render() {
     const {multiSliderValue} = this.state;
     return (
      <View>
          <View>
              <View style={styles.timeLabel}>
              <Text>Coffee Time</Text>
              <Text style={{textAlign:"right"}}>{this.state.begNum}  to  {this.state.endNum}</Text>
              </View>
           <MultiSlider
               values={[multiSliderValue[0], multiSliderValue[1]]}
               sliderLength={300}
                onValuesChange={this.multiSliderValuesChange}
                min={0}
                max={23}
                step={1}
           />
         </View>

       </View>
     );
   }


}


const styles = StyleSheet.create({
    timeLabel:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:24
    }
});