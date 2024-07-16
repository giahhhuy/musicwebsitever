import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAQ6o0PpgONPlM-0wvUsQDPjWQ7rXm5Sns",
  authDomain: "musicwebsite-98644.firebaseapp.com",
  databaseURL: "https://musicwebsite-98644-default-rtdb.firebaseio.com",
  projectId: "musicwebsite-98644",
  storageBucket: "musicwebsite-98644.appspot.com",
  messagingSenderId: "11544232146",
  appId: "1:11544232146:web:d3c6811e5b95c777116d0b"
};

const app = initializeApp(firebaseConfig);
const dbDatabase = getDatabase(app);
const authFirebase = getAuth(app);

export { dbDatabase, authFirebase };
