import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC4HiP7foqpiHn0c7QexmXtTQ_fHFVkKT0",
  authDomain: "eser-clothing-db-67eea.firebaseapp.com",
  databaseURL: "https://eser-clothing-db-67eea.firebaseio.com",
  projectId: "eser-clothing-db-67eea",
  storageBucket: "eser-clothing-db-67eea.appspot.com",
  messagingSenderId: "609029459504",
  appId: "1:609029459504:web:fdc8f619d0ff958e"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
