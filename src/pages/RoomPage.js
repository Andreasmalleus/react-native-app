import React from "react";
import {StyleSheet, Alert, Button} from "react-native";
import {GiftedChat} from "react-native-gifted-chat";
import firebaseApplication from "../components/firebaseConfig.js";
class RoomPage extends React.Component{
    constructor(props){
        super(props);
        const firebaseDB = firebaseApplication.database();
        this.room = this.props.navigation.state.params.roomKey;
        this.messageRef = firebaseDB.ref(`rooms/${this.room}/messages`);
        this.state = {
            messages : [],
            user : [
                
            ]
        }
    }
    static navigationOptions = ({ navigation }) => ({
        headerTintColor : "white"
    })

    componentDidMount(){
        this.setState({
            user : firebaseApplication.auth().currentUser
        })
        this.listenForMessages()
    }

    listenForMessages = () =>{
        this.messageRef.on('value', (snapshot) => {
            //snapshot returns all of the messages
            let messageList = [];
            snapshot.forEach((message) =>{
                messageList = [
                    ({
                        _id : message.key, 
                        text : message.val().text,
                        createdAt : message.val().createdAt,
                        user : {
                            _id : message.val().user._id,
                            name : message.val().user.name
                        }
                    }), ...messageList
                ];
                
            })
            this.setState({
                messages : messageList
            })
        },
        (errorObject) =>{
            console.log("The read has failed" + errorObject);
        });
    }

    addMessages = (messages) =>{
        this.messageRef.push({
            text : messages[0].text,
            createdAt : Date.now(),
            user : {
                _id : messages[0].user._id,
                name : messages[0].user.name
            }
        })
    }

    render(){
        return(
            <GiftedChat
            messages={this.state.messages}
            onSend={this.addMessages.bind(this)}
            user={{
              _id: this.state.user.uid,
              name : this.state.user.email
            }}
          />
        )
    }
}

export default RoomPage;