import React from "react";
import {Text, View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Button, Keyboard ,TouchableHighlight, Alert} from "react-native";
import firebaseApplication from "../components/firebaseConfig.js";
import * as bcrypt from "react-native-bcrypt";


class SignupPage extends React.Component{
  constructor(props){
    super(props);
    const firebaseDB = firebaseApplication.database();
    this.userRef = firebaseDB.ref('users');
    this.state ={
        email : "",
        password : "",
        confirmationPassword : ""
    }
  }
    
  handleSignUp = () => {
    this.signUp();

  }

  hash = (password) => {
    return bcrypt.hashSync(password, 10)
  }

  signUp  = async() => {
      if(this.state.password == this.state.confirmationPassword){
        if(this.state.email != "" && this.state.password != "" && this.state.confirmationPassword != ""){
          try{
            await firebaseApplication.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            this.userRef.push({
                email : this.state.email,
                password : this.hash(this.state.password)
            })
            console.log(this.state.email + " signed up");
            this.props.navigation.navigate("Login");
          }catch(err){
            console.log(err);
            Alert.alert(err.toString());
          }
        }else{
          Alert.alert(
            "Fields arent quite right",
            "Press OK to cancel...",
            [
              {text: "OK", onPress: () => console.log("OK has been pressed")}
            ],
            {cancelable : true}
          );
        }
      }else{
        Alert.alert("Passwords do not match");
      }
  }



    render() {
        const {navigate} = this.props.navigation;
        return (
          <KeyboardAvoidingView style={styles.containerView} behavior="padding">
    
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.signupScreenContainer}>
              <View style={styles.signupFormView}>
              <Text style={styles.logoText}>Adieu</Text>
                <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.signupFormTextInput} onChangeText={(text) => this.setState({email : text})} value={this.state.email}/>
                <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.signupFormTextInput} secureTextEntry={true} onChangeText={(text) => this.setState({password : text})} value={this.state.password}/>
                <TextInput placeholder="Confirm password" placeholderColor="#c4c3cb" style={styles.signupFormTextInput} secureTextEntry={true} onChangeText={(text) => this.setState({confirmationPassword : text})} value={this.state.confirmationPassword}/>
                <TouchableHighlight style={styles.signupButton}>
                <Button
                    title="Create account"
                    onPress={() => this.handleSignUp()}
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