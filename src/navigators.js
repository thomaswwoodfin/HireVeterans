/*
* Created by Thomas
* */


import React, {Component} from 'react';
import {
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

// Navigators
import {DrawerNavigator, StackNavigator, TabNavigator, createBottomTabNavigator} from 'react-navigation'

// StackNavigator screens
import Login from "./Login";
import Register from "./Register";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";

// Plain old component
import Plain from './Plain'
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import Splash from "./Splash";
import SideBar from "./helpers/SideBar";

export const Home = StackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: ({navigation}) => ({
            title: 'Dashboard',
            gesturesEnabled: true,
            headerLeft: () => {
                return (
                    <TouchableOpacity style={styles.headerbtn}
                         onPress={() =>navigation.openDrawer()}
                    >
                        <Icon
                            name="menu"
                            size={25}
                            color="#000" />
                    </TouchableOpacity>
                )
            }
        })
    },
}, {headerMode: 'screen'});

// Drawer Navigator
export const Drawer = DrawerNavigator({
    Home: {
        screen: Home
    }
}, {
    contentComponent: SideBar,
    drawerWidth: 300
});


// Main App Navigation
export const Stack = StackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    },
    Drawer: {
        screen: Drawer,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    }
}, {headerMode: 'none'});
