import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBH96SgF-OsaLfIWcyjNs8B5edpOmN2q2I",
    authDomain: "tienda-lujan.firebaseapp.com",
    projectId: "tienda-lujan",
    storageBucket: "tienda-lujan.appspot.com",
    messagingSenderId: "480583528179",
    appId: "1:480583528179:web:8f3f8428a56e8cb2605186"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);