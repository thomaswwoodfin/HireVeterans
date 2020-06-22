/*
* Created by Thomas
* */


import React, {Component} from 'react'
import {
    View,
    Image,
    TextInput,
    ScrollView,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity, Text,
    ImageBackground, ActivityIndicator, AsyncStorage
} from 'react-native'
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";
import {userLogin} from "./parseclient";

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

class SignIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isloginin: false
        }
    }

    signin() {
        const _this = this
        _this.setState({
            isloginin: true
        })
        const login = userLogin(this.state.email, this.state.password)
        login.then(function (user) {
            setTimeout(() => {
                _this.setState({
                    isloginin: false
                })
                AsyncStorage.setItem('user', JSON.stringify(user));
                _this.props.navigation.navigate('Drawer')
            }, 2000)
        }, function (error) {
            setTimeout(() => {
                _this.setState({
                    isloginin: false
                })
                Snackbar.show({
                    title: error.message,
                    duration: Snackbar.LENGTH_LONG ,
                    backgroundColor: 'red'
                });
            }, 2000)
        })
    }

    render() {
        return (
            <DismissKeyboard>
                <ImageBackground
                    resizeMode='cover'
                    source={require('./images/loginbg.png')}
                    style={styles.blueContainer}>
                    <TouchableOpacity style={styles.closebutton}
                                      onPress={() => {
                                          console.warn(JSON.stringify('in'))
                                          this.props.navigation.navigate('Login')
                                      }}
                    >
                        <Icon name="close" size={25} color="#000"/>
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
                                       onChangeText={(password) => this.setState({password})}/>
                        </View>
                        <TouchableOpacity
                            style={[styles.btn, styles.btnregpage]}
                            onPress={() => this.signin()}
                        >
                            {
                                this.state.isloginin ?
                                    <ActivityIndicator size="small" color="#fff" /> :
                                    <Text style={styles.btnregpageText}>Sign in</Text>
                            }

                        </TouchableOpacity>

                    </ScrollView>
                </ImageBackground>
            </DismissKeyboard>
        );
    }
}

export default SignIn;
