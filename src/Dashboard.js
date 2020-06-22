/*
* Created by Thomas
* */


import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import {createBottomTabNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome5'
import Events from "./Events";
import Talent from "./Talent";
import Reports from "./Reports";


export const Tabs = createBottomTabNavigator({
    Events: {
        screen: Events,
        navigationOptions: {
            tabBarLabel: 'Events',
            tabBarIcon: ({tintColor}) => (
                <Icon name="calendar-alt" color={tintColor} size={20}/>
            )
        }
    },
    Talent: {
        screen: Talent,
        navigationOptions: {
            tabBarLabel: 'Talent',
            tabBarIcon: ({tintColor}) => (
                <Icon name="users" color={tintColor} size={20}/>
            )
        }
    },
    Reports: {
        screen: Reports,
        navigationOptions: {
            tabBarLabel: 'Reports',
            tabBarIcon: ({tintColor}) => (
                <Icon name="list" color={tintColor} size={20}/>
            )
        }},
}, {
    order: ['Events', 'Talent', 'Reports']
})


class Dashboard extends Component {
    render() {
        return (
            <Tabs/>
        );
    }
}

export default Dashboard;
