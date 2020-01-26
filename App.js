
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from "./src/pages/HomePage.js";
import MessagePage from "./src/pages/MessagePage.js";
import SettingsPage from "./src/pages/SettingsPage.js";
import LoginPage from "./src/pages/LoginPage.js";
import SignupPage from "./src/pages/SignupPage.js";

const AppNavigator = createStackNavigator({
  Home : {screen : HomePage},
  Message : {screen : MessagePage},
  Settings : {screen : SettingsPage},
  Login : {screen : LoginPage},
  SignUp : {screen : SignupPage},
},{
  initialRouteName: 'Login',
  defaultNavigationOptions: {
         headerStyle: {
             backgroundColor: '#292929',
             elevation: 0,
             shadowOpacity: 0
         },
         headerTintColor: '#333333',
         headerTitleStyle: {
             fontWeight: 'bold',
             color: '#ffffff'
         },
         cardStyle: { backgroundColor: '#1c1c1c' }
     }
});

export default createAppContainer(AppNavigator);
