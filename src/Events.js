/*
* Created by Thomas
* */


import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {getEvents} from "./parseclient";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
    }

    static navigationOptions = ({navigation}) => ({
        title: 'Events',
    })

    componentDidMount(){
        this.getEventsData()
    }

    getEventsData() {
        var _this = this
        const allevents = getEvents()
        allevents.then((data) => {
            _this.setState({
                events: data
            })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.list}
                          data={this.state.events}
                          keyExtractor= {(item) => {
                              return item.id;
                          }}
                          ItemSeparatorComponent={() => {
                              return (
                                  <View style={styles.separator}/>
                              )
                          }}
                          renderItem={(data) => {
                              let event = data.item
                              return (
                                  <TouchableOpacity>
                                      <Animatable.View style={styles.box}
                                                       animation="bounceInUp"
                                                       duration={3000}
                                      >
                                          <Image style={styles.image} source={{uri: event.image}} />
                                          <View style={styles.boxContent}>
                                              <Text style={styles.title}>{event.get('brandName')}</Text>
                                              <Text style={styles.description}>{event.get('eventAddress')}</Text>
                                              <View style={styles.buttons}>
                                                  <TouchableHighlight>
                                                      <Text>{event.get('city')}</Text>
                                                  </TouchableHighlight>

                                                  <TouchableHighlight>
                                                      <Text>{event.get('eventType')}</Text>
                                                  </TouchableHighlight>

                                              </View>
                                          </View>
                                      </Animatable.View>
                                  </TouchableOpacity>
                              )
                          }}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    list: {
        backgroundColor:"#E6E6E6",
    },
    separator: {
        marginTop: 1,
    },
    image: {
        width: 100,
        height:100,
    },
    box: {
        padding:20,
        marginTop:5,
        marginBottom:5,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    boxContent: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft:10,
    },
    title:{
        fontSize:18,
        color:"#151515",
    },
    description:{
        fontSize:15,
        color: "#646464",
    },
    buttons:{
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        height:35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        width:50,
        marginRight:5,
        marginTop:5,
    },
    icon:{
        width:20,
        height:20,
    },
    view: {
        backgroundColor: "#FF1493",
    },
    profile: {
        backgroundColor: "#1E90FF",
    },
    message: {
        backgroundColor: "#228B22",
    },
});


export default Events
