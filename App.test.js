import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

/*

 */
it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('object has the state', () => {
  const app = new App();
  expect(app.state).toEqual({"selectedTab": "meetings"})
});

it('object renders TabNavigator', () => {
  expect((new App()).render().type.name).toBe('StyledComponent')
});
