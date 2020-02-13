import React from "react";
import { View, StyleSheet, TouchableOpacity, Button, Text, TouchableHighlight} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import Room from "../components/Room.js";
import {mockData} from "../../database.js";
import firebaseApplication from "../components/firebaseConfig.js";


class HomePage extends React.Component{
    _ismounted = false;
    constructor(props){
      super(props);
      const firebaseDB = firebaseApplication.database();
      this.roomRef = firebaseDB.ref('rooms');
      this.user = firebaseApplication.auth().currentUser;
      this.state = {
          rooms : [],
          search : ""
      };
    }

    componentDidMount(){
      this.getAllRooms()
      this._ismounted = true;
    }

    componentWillUnmount(){
      this._ismounted = false;
    }

    static navigationOptions = ({navigation}) => ({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('Settings')}
          title="Settings"
          color="#fff"
          fontWeight= "bold"
        />
      ),
      headerLeft: () => (
        <Button
        onPress={() => navigation.navigate('CreateRoom')}
        title="Create"
        color="#fff"
        fontWeight= "bold"
      />
        ),
      title : "Rooms"
    });


  getAllRooms = () => {
    this.roomRef.on('value', (snapshot) => {
      let roomList = [];
      snapshot.forEach((room) =>{
        roomList.push({
          key : room.key,
          name : room.val().name
        })
      })
      this.setState({rooms: roomList});
  },
  (errorObject) =>{
      console.log("The read has failed" + errorObject);
  });
}


    render() {
      const {navigate} = this.props.navigation;
      return (
        
        <View style={styles.container}>
            <FlatList data={this.state.rooms} renderItem={({item}) => 
              <TouchableOpacity onPress={() => navigate('Room', {name : item.name, roomKey : item.key})}>
                <Room name={item.name} key={item.roomKey} >
                </Room>
              </TouchableOpacity>
              }>
            </FlatList>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
      margin : 1,
  },
  messageButton : {
    borderWidth : 5,
    borderColor: "black",
  },
  searchContainer: {
    color: "white",
    fontSize : 25,
    borderColor: "white",
    borderWidth: 1, 
    borderRadius: 25,
  },
  
})

export default HomePage;