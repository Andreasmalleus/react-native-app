import React from "react";
import { View, StyleSheet,Text, TouchableHighlight, Alert, TextInput} from "react-native";
import firebaseApplication from "../components/firebaseConfig.js";

class RoomCreationPage extends React.Component{
    constructor(props){
        super(props);
        const firebaseDB = firebaseApplication.database();
        this.roomRef = firebaseDB.ref('rooms');
        this.state = {
            newRoom : ""
        }
    }

    addRoom = ()  => {
        if (this.state.newRoom === '') {
          return;
        }
        this.roomRef.push({name : this.state.newRoom})
        Alert.alert("The room: " + this.state.newRoom + " has been created..")
        this.setState({newRoom : ""})
        this.props.navigation.navigate("Home")
      }

    render(){
        return(
            <View style={styles.roomContainer}>
            <TextInput
              style={styles.roomsInput}
              placeholder={"New Room Name"}
              onChangeText={(text) => this.setState({newRoom: text})}
              value={this.state.newRoom}
            />
            <TouchableHighlight style={styles.roomsNewButton}
              underlayColor="#fff"
              onPress={() => this.addRoom()}>
            <Text style={styles.roomsNewButtonText}>Create</Text>  
            </TouchableHighlight>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    roomContainer: {

    },
    roomsInput : {
      borderWidth : 1,
      borderColor : "gray",
      borderRadius : 5,
      fontSize: 25,
      color: "white"
    },
    roomsNewButtonText :{
      color : "white",
      textAlign: "center",
      fontSize : 25
    }
})

export default RoomCreationPage;