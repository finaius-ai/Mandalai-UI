import React from 'react';


import reducer from './src/reducers/tabNavigation'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
//import MandalaiUI from "./src/components/MandalaiUI"
import TabScreens from "./src/components/home/TabScreens"
const store = createStore(reducer);


export default class App extends React.Component {

    render() {


        return (
            <Provider store={store}>
                <TabScreens/>

            </Provider>
        )

    }

}

