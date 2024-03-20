import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

    const firebaseConfig = {
        apiKey: "AIzaSyBnQsWV528UIKN_OLdFbKBOKOlNzj8hseM",
        authDomain: "designnfts-5d554.firebaseapp.com",
        projectId: "designnfts-5d554",
        storageBucket: "designnfts-5d554.appspot.com",
        messagingSenderId: "1006535253653",
        appId: "1:1006535253653:web:c9612f59dacffb6be4c59c",
        measurementId: "G-DPKPBW8PFK"
      };  


if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
};
export{firebase};