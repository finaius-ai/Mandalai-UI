import React from 'react';
import renderer from 'react-test-renderer';
import Contact from "./Contacts"
/*

 */
it('renders without crashing', () => {
  const rendered = renderer.create(<Contact />).toJSON();
  expect(rendered).toBeTruthy();
});
