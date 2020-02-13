
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from "./src/pages/HomePage.js";
import RoomPage from "./src/pages/RoomPage.js";
import SettingsPage from "./src/pages/SettingsPage.js";
import LoginPage from "./src/pages/LoginPage.js";
import SignupPage from "./src/pages/SignupPage.js";
import RoomCreationPage from "./src/pages/RoomCreationPage.js";

const AppNavigator = createStackNavigator({
  Home : {screen : HomePage},
  Room : {screen : RoomPage},
  Settings : {screen : SettingsPage},
  Login : {screen : LoginPage},
  SignUp : {screen : SignupPage},
  CreateRoom : {screen : RoomCreationPage} 
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
