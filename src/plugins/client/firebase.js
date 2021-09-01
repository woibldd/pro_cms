import  { initializeApp}from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import { getAnalytics } from  "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDae8sHM0DPG7yzTw3134GTlnQ1X4wYEzE",
  authDomain: "bitkeep-web.firebaseapp.com",
  projectId: "bitkeep-web",
  storageBucket: "bitkeep-web.appspot.com",
  messagingSenderId: "25685918225",
  appId: "1:25685918225:web:6150d19eb600690a18a7b0",
  measurementId: "G-39NRXSECDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
console.log(".....",{analytics})