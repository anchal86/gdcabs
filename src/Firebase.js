// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs6NIo76YkAmxeE_cJd1GAvFygTewq3x0",
  authDomain: "luxorides-b37b5.firebaseapp.com",
  projectId: "luxorides-b37b5",
  storageBucket: "luxorides-b37b5.appspot.com",
  messagingSenderId: "1000479933380",
  appId: "1:1000479933380:web:4b1a3cea8ba5a5670f5a91"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore()