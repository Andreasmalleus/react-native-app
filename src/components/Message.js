import React from "react";
import {Text, View, Image, StyleSheet} from "react-native";


class Message extends React.Component{

    render(){
        return(
        <View style={styles.container}>
            <Image source={{uri : "https://placeimg.com/140/140/any"}} style={styles.userImg}></Image>
        <View style={styles.messageContainer}>
            <Text style={styles.username} >{this.props.author}</Text>
            <Text style={styles.lastmessage} >{this.props.message}</Text>
        </View>
        </View>
        )
    }

}

const styles = StyleSheet.create({
    username : {
        fontSize: 20,
        color: "#ffffff",
        fontWeight: "bold"
    },
    
    lastmessage: {
        fontSize: 10,
        color: "gray",
        
    },
    
    messageContainer: {
        flex: 1,
        flexDirection : "column",
        marginLeft: 10,
        justifyContent: "center"
    },
    userImg : {
        width: 75,
        height: 75,
    },
    container : {
        margin: 4,
        flex: 1,
        flexDirection: "row"
    }

})

export default Message;