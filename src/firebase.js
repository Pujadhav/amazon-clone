import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAL2_fxt2hFXYgcDhnflBZ0u-yYY2jgx0g",
    authDomain: "clone-9f7c0.firebaseapp.com",
    databaseURL: "https://clone-9f7c0.firebaseio.com",
    projectId: "clone-9f7c0",
    storageBucket: "clone-9f7c0.appspot.com",
    messagingSenderId: "981804604732",
    appId: "1:981804604732:web:02d15b1f2fb241c11e5239",
    measurementId: "G-BJ4GTH0KMQ"
});
const auth = firebase.auth();
export {auth};