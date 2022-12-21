import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAdQzrH2om_bB8MpDo5cL9EqMPyXvBwxTA",
    authDomain: "slack-clone-yt-bce7d.firebaseapp.com",
    projectId: "slack-clone-yt-bce7d",
    storageBucket: "slack-clone-yt-bce7d.appspot.com",
    messagingSenderId: "894725167773",
    appId: "1:894725167773:web:dc318aaa15029e235e1274"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };