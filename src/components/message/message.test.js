import React from 'react';

import renderer from 'react-test-renderer';
import MessageDetailScreen from "./MessageDetailScreen";
import Users from '../mockdata/user/User'
/*

 */
it('renders without crashing', () => {
    const user = Users[0];
    const navigation = {
        state: {
            params:{
                user: user
            }
        }
    };
    const rendered = renderer.create(<MessageDetailScreen navigation={navigation}/>).toJSON();
    expect(rendered).toBeTruthy();
});