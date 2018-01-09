import React from 'react';
import renderer from 'react-test-renderer';
import Contacts from "./Contacts";




it('renders without crashing', () => {
    const rendered = renderer.create(<Contacts />).toJSON();
    expect(rendered).toBeTruthy();
});