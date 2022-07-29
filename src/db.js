import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD1p_8sw1z8wddEeBIl2so4hEni8aP1cGg",
    authDomain: "events7-c2fea.firebaseapp.com",
    projectId: "events7-c2fea",
    storageBucket: "events7-c2fea.appspot.com",
    messagingSenderId: "1040109280554",
    appId: "1:1040109280554:web:3e255cc2c78ead520cd253",
    measurementId: "G-VRWBZSYP70"
  };
  
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()