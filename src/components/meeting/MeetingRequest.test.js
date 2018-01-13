import React from 'react';
import MeetingRequest from "./MeetingRequests"
import renderer from 'react-test-renderer';

/*

 */
it('renders without crashing', () => {
  const rendered = renderer.create(<MeetingRequest/>).toJSON();
  expect(rendered).toBeTruthy();
});