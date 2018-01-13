import React from 'react';
import renderer from 'react-test-renderer';
import NewMtg from "./NewMtg";

it('renders without crashing', () => {
  const rendered = renderer.create(<NewMtg/>).toJSON();
  expect(rendered).toBeTruthy();
});

/*
it('state is initialized', () => {
  const newmtg = new NewMtg();
  expect(newmtg.state).toBeTruthy();
});
 */