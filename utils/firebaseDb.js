import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtuVzQ54_fAznsYc4yx0CZgTE79eFviIE",
  authDomain: "tallycounter-rn.firebaseapp.com",
  projectId: "tallycounter-rn",
  storageBucket: "tallycounter-rn.appspot.com",
  messagingSenderId: "10443607045",
  appId: "1:10443607045:web:787d51d71b9a3575b0206c",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig)

// if (!firebase.app.length) {
firebase.initializeApp(firebaseConfig);
// }

export { firebase };
