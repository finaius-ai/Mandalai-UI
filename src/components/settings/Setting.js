import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import SettingScreen from "./SettingScreen";
import TimeSetting from "./setReqs/TimeSetting";



const Setting = StackNavigator({
    Setting: {screen: SettingScreen},
    TimeSetting: {screen: TimeSetting}

});

export default Setting;