import React from "react";
import {Text, View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Button, Keyboard ,TouchableHighlight} from "react-native";

class SignupPage extends React.Component{
  constructor(props){
    super(props);
    this.state ={
        username : "",
        email : "",
        password : "",
        confirmationPassword : ""
    }
  }
    
  onSignupPress = () => {
      alert(this.state.username);
  }

    render() {
        const {navigate} = this.props.navigation;
        return (
          <KeyboardAvoidingView style={styles.containerView} behavior="padding">
    
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.signupScreenContainer}>
              <View style={styles.signupFormView}>
              <Text style={styles.logoText}>Adieu</Text>
                <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.signupFormTextInput} onChangeText={(text) => this.setState({username : text})} value={this.state.username}/>
                <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.signupFormTextInput} onChangeText={(text) => this.setState({email : text})} value={this.state.email}/>
                <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.signupFormTextInput} secureTextEntry={true} onChangeText={(text) => this.setState({password : text})} value={this.state.password}/>
                <TextInput placeholder="Confirm password" placeholderColor="#c4c3cb" style={styles.signupFormTextInput} secureTextEntry={true} onChangeText={(text) => this.setState({confirmationPassword : text})} value={this.state.confirmationPassword}/>
                <TouchableHighlight style={styles.signupButton}>
                <Button
                    title="Create account"
                    onPress={() => this.onSignupPress()}
                />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigate('Login')}>
                    <Text style={styles.singupText}>Already have an Account ? Log in</Text>
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
      signupScreenContainer: {
        flex: 1,
      },
      logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 100,
        marginBottom: 30,
        textAlign: 'center',
        color: "#ffffff"
      },
      signupFormView: {
        flex: 1
      },
      signupFormTextInput: {
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
      signupButton: {
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

export default SignupPage;