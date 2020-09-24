import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDE52MGe-XympNWW9EESyfElcKmpBozp2o",
    authDomain: "myinstagram-354bb.firebaseapp.com",
    databaseURL: "https://myinstagram-354bb.firebaseio.com",
    projectId: "myinstagram-354bb",
    storageBucket: "myinstagram-354bb.appspot.com",
    messagingSenderId: "373625922873",
    appId: "1:373625922873:web:d66ecfef8e1423f19874e8",
    measurementId: "G-W0V54L45Y5"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db , auth, storage }