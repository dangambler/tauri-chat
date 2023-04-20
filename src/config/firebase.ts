import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLSi4v3mm_M3SaNSLU8B4Mbab9gnsT1Ds",
  authDomain: "tauri-chat.firebaseapp.com",
  projectId: "tauri-chat",
  storageBucket: "tauri-chat.appspot.com",
  messagingSenderId: "651080480349",
  appId: "1:651080480349:web:7c801ebbd2ae4377623fb4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const FIREBASE = {
  app,
  db,
};
