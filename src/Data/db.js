import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnsFIGaFMa4Q9sK9fo8KEzq_zX-ObIBKs",
    authDomain: "fir-f486c.firebaseapp.com",
    projectId: "fir-f486c",
    storageBucket: "fir-f486c.appspot.com",
    messagingSenderId: "108950937784",
    appId: "1:108950937784:web:34ee03eddbcf2906de944d",
    measurementId: "G-SK98G8L2CV"
};

firebase.initializeApp(firebaseConfig)

export default firebase