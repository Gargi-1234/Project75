import firebase from "firebase";
//require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCIX8QqfsQvlhP0HceJmOqpK4z-Z1LXv1g",
  authDomain: "project71-c29d9.firebaseapp.com",
  projectId: "project71-c29d9",
  storageBucket: "project71-c29d9.appspot.com",
  messagingSenderId: "553435488812",
  appId: "1:553435488812:web:9b798bb3af7b816e496789"
};
if (!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
