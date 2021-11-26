import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Feed from './screens/Feed'
import About from './screens/About'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();


export default class App extends React.Component {
    render() {
        return(
            // <AppContainer />
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Feed">
                    <Drawer.Screen name="Feed" component={Feed} />
                    <Drawer.Screen name="About" component={About} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}