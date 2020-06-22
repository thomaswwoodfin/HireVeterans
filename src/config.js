/*
* Created by Thomas
* */


import { AsyncStorage } from "react-native"

const cruser = async () => {
    return await AsyncStorage.getItem('user');
}

export var config = {
    parseappid: '0ejshaH0g7pFKunRnEdFRdBQ47hZpjYqslf5ceTU',
    parseappkey: 'j0xvDgcqtPzf3rDdaSJoYEPQtwlhmAhoWUY5ULtk',
    parseurl: 'https://parseapi.back4app.com/',
    user: cruser ? cruser : false
}
