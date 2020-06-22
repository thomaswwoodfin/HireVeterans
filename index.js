/*
* Created by Thomas
* */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.ignoredYellowBox = ['The StackNavigator', 'The DrawerNavigator'];
AppRegistry.registerComponent(appName, () => App);
