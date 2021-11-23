import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Welcome from './screens/Welcome'
import Feed from './screens/Feed'
import About from './screens/About'

export default class App extends React.Component {
    render() {
        return(
            <AppContainer />
        )
    }
}

const AppNavigator = createSwitchNavigator({
    Welcome: Welcome,
    Feed: Feed,
    About: About
});

const AppContainer = createAppContainer(AppNavigator);
