/*
* Created by Thomas
* */


import React, {Component} from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    Text
} from 'react-native'

const CsTextInput = props => (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputs} {...props} />
        </View>
        {
            props.error ? <Text style={styles.errorText}>{props.error}</Text> : null
        }
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height:55,
        marginBottom:20,
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#d7d7d7',
        borderRadius: 5,
        borderBottomWidth: 1,
        width: '100%',
        height:55,
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    errorText: {
        marginTop: 5,
        marginBottom: 5,
        color: '#ff0000',
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default CsTextInput;
