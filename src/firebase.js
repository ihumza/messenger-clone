import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzocA2eJ5v_9hw4y_fPsAMrAknhrgHP1s",
    authDomain: "mymessenger-clone.firebaseapp.com",
    projectId: "mymessenger-clone",
    storageBucket: "mymessenger-clone.appspot.com",
    messagingSenderId: "936099543458",
    appId: "1:936099543458:web:acd8f7c5486d04627bdafb",
    measurementId: "G-F676BL6FK1"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;