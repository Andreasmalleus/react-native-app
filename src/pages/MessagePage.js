import React from "react";
import {StyleSheet} from "react-native";
import {GiftedChat} from "react-native-gifted-chat";
class MessagePage extends React.Component{
    state= {
        messages : [],
        user : [
            
        ]
    }
    static navigationOptions = ({ navigation }) => {

        return {
          title: navigation.getParam('author'),
          
        };
      };

    componentDidMount(){
        this.setState({
            messages: [
                {
                     _id : 1,
                    text: this.props.navigation.getParam('message'),
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                        },
                    }
                ]
            })
    }

    onSend = (messages = [])=>{
        this.setState(previousState => ({
            messages : GiftedChat.append(previousState.messages, messages)
        }))
    }

    render(){
        return(
            <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
        )
    }
}

const styles = StyleSheet.create({

})

export default MessagePage;