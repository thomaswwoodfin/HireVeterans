/*
* Created by Thomas
* */


import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

class Talent extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'Talent',
    })

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Talent</Text>
            </View>
        )
    }
}

export default Talent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
    }
})
