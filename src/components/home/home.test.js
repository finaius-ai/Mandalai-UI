import React from 'react';
import renderer from 'react-test-renderer';
import TabScreens, {NewMtgScreen} from "./TabScreens";

/*

 */
it('renders NewMtgScreen without crashing', () => {
  const rendered = renderer.create(<NewMtgScreen/>).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders without crashing', () => {
  const rendered = renderer.create(<TabScreens/>).toJSON();
  expect(rendered).toBeTruthy();
});