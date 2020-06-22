/*
* Created by Thomas
* */


import React, {Component} from 'react'
import {
    View,
    Image,
    TextInput,
    ScrollView,
    Keyboard, TouchableWithoutFeedback, TouchableOpacity, Text, ImageBackground
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

class Register extends Component {
    render() {
        return (
            <DismissKeyboard>
                <ImageBackground
                    resizeMode='cover'
                    source={require('./images/loginbg.png')}
                    style={styles.blueContainer}>
                    <TouchableOpacity style={styles.closebutton}
                          onPress={() => {
                              this.props.navigation.navigate('Login')
                          }}
                    >
                        <Icon name="close" size={25} color="#000" />
                    </TouchableOpacity>
                    <ScrollView contentContainerStyle={styles.blueContainerInner}>

                        <Image
                            resizeMode='contain'
                            style={styles.loginLogo}
                            source={require('./images/logoc.png')}
                        />

                        <View style={styles.inputContainer}>
                            <TextInput style={styles.inputs}
                                       placeholder="Email"
                                       keyboardType="email-address"
                                       underlineColorAndroid='transparent'
                                       onChangeText={(email) => this.setState({email})}/>
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput style={styles.inputs}
                                       placeholder="Passsword"
                                       secureTextEntry
                                       underlineColorAndroid='transparent'
                                       onChangeText={(passwrd) => this.setState({passwrd})}/>
                        </View>
                        <TouchableOpacity
                            style={[styles.btn, styles.btnregpage]}
                            onPress={() => this.props.navigation.navigate('Register')}
                        >
                            <Text style={styles.btnregpageText}>Sign up</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </ImageBackground>
            </DismissKeyboard>
        );
    }
}

export default Register;
