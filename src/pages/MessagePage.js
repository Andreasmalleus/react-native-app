import React, { Children } from "react";
import {StyleSheet, Alert} from "react-native";
import {GiftedChat} from "react-native-gifted-chat";
import firebaseApplication from "../components/firebaseConfig.js";
import { cos } from "react-native-reanimated";
class MessagePage extends React.Component{
    constructor(props){
        super(props);
        const firebaseDB = firebaseApplication.database();
        this.messageRef = firebaseDB.ref('messages');
        this.state = {
            messages : [],
            user : [
                
            ]
        }
    }
    static navigationOptions = ({ navigation }) => {

        return {
          title: navigation.getParam('author'),
          
        };
    };

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

export default MessagePage;