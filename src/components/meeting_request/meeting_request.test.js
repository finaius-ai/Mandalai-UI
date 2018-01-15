import React from 'react';

import renderer from 'react-test-renderer';
import Users from "../mockdata/user/User";
import NewMeeting from "../new_meetings/NewMeeting"
import Autocomplete from "./Autocomplete";
import UserCell from "./UserCell";
import RequestedMeetings from './RequestedMeetings'
/*

 */
it('renders NewMeeting without crashing', () => {
    const rendered = renderer.create(<NewMeeting/>).toJSON();
    expect(rendered).toBeTruthy();
});

it('renders Autocomplete without crashing', () => {
    const rendered = renderer.create(<Autocomplete/>).toJSON();
    expect(rendered).toBeTruthy();
});

it('renders UserCell without crashing', () => {
    const rendered = renderer.create(<UserCell user={Users[1]}/>).toJSON();
    expect(rendered).toBeTruthy();
});

it('renders RequestedMeetings without crashing', () => {
    const rendered = renderer.create(<RequestedMeetings user={Users[1]}/>).toJSON();
    expect(rendered).toBeTruthy();
});