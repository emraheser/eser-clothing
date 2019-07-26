import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCEllgkPmSwfM7WQa5Ax0x395GYycr1hFE",
  authDomain: "eser-clothing-db.firebaseapp.com",
  databaseURL: "https://eser-clothing-db.firebaseio.com",
  projectId: "eser-clothing-db",
  storageBucket: "eser-clothing-db.appspot.com",
  messagingSenderId: "480015826735",
  appId: "1:480015826735:web:e111bc52b5698be6"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
