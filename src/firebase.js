import  firebase  from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCDEhIjQw1D92zQvDZlol2Kr_w0Ma019Ck",
    authDomain: "realtime-chatapp-ce117.firebaseapp.com",
    projectId: "realtime-chatapp-ce117",
    storageBucket: "realtime-chatapp-ce117.appspot.com",
    messagingSenderId: "379918112268",
    appId: "1:379918112268:web:f9703f67ab286862744029"
};

firebase.initializeApp(firebaseConfig);
 
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore()