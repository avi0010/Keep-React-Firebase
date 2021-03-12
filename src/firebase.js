import Firebase from "firebase"

Firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: "spry-acolyte-306805.firebaseapp.com",
    projectId: "spry-acolyte-306805",
    storageBucket: "spry-acolyte-306805.appspot.com",
    messagingSenderId: "96637464590",
    appId: "1:96637464590:web:f08a92b8af51d144a50c5f",
    measurementId: "G-1981R1XQ8W"
});

const db = Firebase.firestore();
export default db;