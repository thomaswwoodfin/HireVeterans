/*
* Created by Thomas
* */


const React = require("react-native");
const {Dimensions, Platform} = React;
const deviceHeight = Dimensions.get("window").height;
const devicewidth = Dimensions.get("window").width;

export default {
    loginLogo: {
        width: 250,
        height: 250,
        marginBottom: 50
    },
    blueContainer: {
        width: '100%',
        height: '100%',
    },
    blueContainerInner: {
        padding: 20,
        flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin:10,
        width: '100%',
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        elevation: 1,
        backgroundColor: '#fff'
    },
    btnLoginpage: {
        backgroundColor: "#272789",
    },
    btnLoginpageText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    btnregpage: {
        width: '30%',
        borderRadius: 5,
        backgroundColor: "#272789",
    },
    btnregpageText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    btnghost: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin:10,
        width: '100%'
    },
    btnghosttext: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#d7d7d7',
        borderRadius: 5,
        borderBottomWidth: 1,
        width: '100%',
        height:55,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    closebutton: {
        position: 'absolute',
        width: 40,
        height: 40,
        padding: 10,
        top: 20,
        left: 20,
        zIndex: 999999
    },

//    header btn
    headerbtn: {
        marginLeft: 10
    }

}
