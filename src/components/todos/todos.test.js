import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from "./TodoList";

/*

 */
it('renders TodoList without crashing', () => {
  const rendered = renderer.create(<TodoList />).toJSON();
  expect(rendered).toBeTruthy();
});
