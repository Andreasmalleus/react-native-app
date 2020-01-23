import React from "react";
import { View, StyleSheet, TouchableOpacity, Button} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Message from "../components/Message.js";
import {mockData} from "../../database.js";




class HomePage extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          data : this.addKeysToUsers(mockData)
      };
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
      headerLeft : () => (
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Login"
          color="#fff"
          fontWeight= "bold"
        />
      ),

    });


  addKeysToUsers = (objects) =>{
    return objects.map((obj, index) =>{
        return Object.assign(obj, {key : index.toString()})
    })

  }

    render() {
      const {navigate} = this.props.navigation;

      return (
        
        <View style={styles.container}>  
            <FlatList data={this.state.data} renderItem={({item}) => 
              <TouchableOpacity onPress={() => navigate('Message', {author: item.author, message : item.content})}>
                <Message author={item.author} message={item.content} >
                </Message>
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
  }
})

export default HomePage;