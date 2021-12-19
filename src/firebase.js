// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXDt9AuM6M28QM6Q1fMbrZhwCer0qiphQ",
  authDomain: "react-chat-315c0.firebaseapp.com",
  databaseURL: "https://react-chat-315c0-default-rtdb.firebaseio.com/",
  projectId: "react-chat-315c0",
  storageBucket: "react-chat-315c0.appspot.com",
  messagingSenderId: "332928210370",
  appId: "1:332928210370:web:563ca17a557c6e5f20f25b",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);
