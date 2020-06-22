/*
* Created by Thomas
* */


import React, {Component} from 'react'

import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';

class SideBar extends Component {

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
                                Home
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <Text>Settings</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
    },
    navItemStyle: {
        padding: 10
    },
    navSectionStyle: {
        backgroundColor: 'lightgrey'
    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
    }
})

export default SideBar;
