/*
* Created by Thomas
* */



import React, {Component} from 'react';
import {StatusBar} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { Drawer, Stack } from './src/navigators'


export default class App extends Component {

    render() {
        return (
            <SafeAreaView style={{flex: 1}} forceInset={{ bottom: 'never' }}>
                <StatusBar
                    backgroundColor="#004ba0"
                    barStyle="light-content"
                />
                <Stack/>
            </SafeAreaView>
        );
    }
}
