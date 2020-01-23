import React from "react";
import {Text, View, StyleSheet} from "react-native";

class SettingsPage extends React.Component{

    render(){

        return(
            <View>  
                <Text style={styles.text}>settings</Text>
                <Text style={styles.text}>color</Text>
            </View>
        )

    }

}

const styles = StyleSheet.create({
    text :{
        color: "white"
    }
})

export default SettingsPage;