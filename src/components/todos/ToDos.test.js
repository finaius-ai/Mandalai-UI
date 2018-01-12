import React from 'react';

import renderer from 'react-test-renderer';
import ToDos from './ToDos';

it('renders without crashing', () => {
  const rendered = renderer.create(<ToDos/>).toJSON();
  expect(rendered).toBeTruthy();
});