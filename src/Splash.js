/*
* Created by Thomas
* */


import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image, AsyncStorage,
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import {config} from './config'

class Splash extends Component {

    componentDidMount() {
        //this.checkuser()
        setTimeout(()=> {
            this.props.navigation.navigate('Drawer')
        }, 3000)
    }

    async checkuser () {
        try {
            const value = await AsyncStorage.getItem('user', (value) => {
                console.warn(JSON.stringify(value))

                if (value !== null) {
                    setTimeout(()=> {
                        this.props.navigation.navigate('Drawer')
                    }, 3000)
                } else {
                    setTimeout(()=> {
                        this.props.navigation.navigate('Login')
                    }, 3000)
                }
            });

        } catch (error) {
            console.warn(JSON.stringify(error))
        }
    }


    render() {
        return (
            <ImageBackground
                source={require('./images/spbg.jpg')}
                style={{width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}
            >
                <Animatable.Image
                    animation="zoomInUp"
                    duration={3000}
                    resizeMode='contain'
                    style={{width: 230}}
                    source={require('./images/logoc.png')}/>
            </ImageBackground>
        );
    }
}

export default Splash;
