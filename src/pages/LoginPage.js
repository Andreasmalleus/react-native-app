import React from "react";
import {Text, View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Button, Keyboard ,TouchableHighlight} from "react-native";

class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state ={
        username : "",
        password : ""
    }
  }

    onLoginPress  = () => {
        alert("logged in");
    }

    

    render() {
        const {navigate} = this.props.navigation;
        return (
          <KeyboardAvoidingView style={styles.containerView} behavior="padding">
    
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.loginScreenContainer}>
              <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Adieu</Text>
                <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(text) => this.setState({username : text})} value={this.state.username}/>
                <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} onChangeText={(text) => this.setState({password : text})} value={this.state.password}/>
                <TouchableHighlight style={styles.loginButton}>
                <Button
                    title="Login"
                    onPress={() => this.onLoginPress()}
                />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigate('Signup')}>
                    <Text style={styles.singupText}>Dont have an account ? Sign up now !</Text>
                </TouchableHighlight>
              </View>
            </View>
          </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        );
      }

    }

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
      },
      loginScreenContainer: {
        flex: 1,
      },
      logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: 'center',
        color: "#ffffff"
      },
      loginFormView: {
        flex: 1
      },
      loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
      
      },
      loginButton: {
        backgroundColor: '#3897f1',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
      },
      singupText:{
          marginTop: 5,
          fontSize: 15,
          color: "#ffffff",
          textAlign: "center"
      }
})

export default LoginPage;