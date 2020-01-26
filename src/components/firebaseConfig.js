import firebase from "firebase";

const firebaseConfig = {
    apiKey : "AIzaSyDVkrUJdI5Nla4r9X3m58AOX9PWV_2iuQI",
    authDomain : "react-native-messenger-11a6f.firebaseapp.com",
    databaseURL : "https://react-native-messenger-11a6f.firebaseio.com",
    projectId : "react-native-messenger-11a6f",
    storageBucket : "react-native-messenger-11a6f.appspot.com",
}

const firebaseApplication = firebase.initializeApp(firebaseConfig);

export default firebaseApplication;

