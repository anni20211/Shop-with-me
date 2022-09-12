import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/compat/storage';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDLZNh8g_d6xm88iLNnl_WcjXXcYtrb5E8",
    authDomain: "clone-e51c6.firebaseapp.com",
    projectId: "clone-e51c6",
    storageBucket: "clone-e51c6.appspot.com",
    messagingSenderId: "160609528747",
    appId: "1:160609528747:web:0560ed07023ca0c5d2c0ee"
  }; 
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  
  export {db,auth};

