import React from 'react';
import renderer from 'react-test-renderer';
import Setting from "./Setting"
/*

 */
it('renders without crashing', () => {
  const rendered = renderer.create(<Setting />).toJSON();
  expect(rendered).toBeTruthy();
});
