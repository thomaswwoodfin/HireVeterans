/*
* Created by Thomas
* */


import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    Animated
} from 'react-native'
import styles from "./styles";
import * as Animatable from "react-native-animatable";

class Login extends Component {
    render() {
        return (
            <ImageBackground
                resizeMode='cover'
                source={require('./images/loginbg.png')}
                style={styles.blueContainer}>
                <View style={styles.blueContainerInner}>
                    <Animated.Image
                        animation="bounceIn"
                        duration={3000}
                        resizeMode='contain'
                        style={styles.loginLogo}
                        source={require('./images/logoc.png')}
                    />

                    <TouchableOpacity
                        style={[styles.btn, styles.btnLoginpage]}
                        onPress={() => this.props.navigation.navigate('Register')}
                    >
                        <Text style={styles.btnLoginpageText}>Connect With Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btn, styles.btnLoginpage]}
                        onPress={() => this.props.navigation.navigate('Register')}
                    >
                        <Text style={styles.btnLoginpageText}>Sign up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnghost}
                        onPress={() => this.props.navigation.navigate('SignIn')}
                    >
                        <Text style={styles.btnghosttext}>
                            Do you have account? Sign in
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default Login;
