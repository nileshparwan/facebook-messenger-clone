// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBH7j1acWK0awlK-a7_v73jm9hAUpWsAh0",
    authDomain: "facebook-messenger-clone-9c558.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-9c558-default-rtdb.firebaseio.com",
    projectId: "facebook-messenger-clone-9c558",
    storageBucket: "facebook-messenger-clone-9c558.appspot.com",
    messagingSenderId: "133941586395",
    appId: "1:133941586395:web:019053f393a0a3357e5ffe",
    measurementId: "G-2FJYRL1KW5"
});

export const db = firebaseApp.firestore();