import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

    const firebaseConfig = {
        apiKey: "AIzaSyD2eOBpIdF7lXp4sTnuJ-DPITdugXEBi0k",
        authDomain: "designnftsss.firebaseapp.com",
        projectId: "designnftsss",
        storageBucket: "designnftsss.appspot.com",
        messagingSenderId: "752356665318",
        appId: "1:752356665318:web:f530b034f01a5377051827",
        measurementId: "G-ZZNDVE0EGP"
      };  


if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
};
export{firebase};