import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
     apiKey: "AIzaSyDFJVaj-oPC_4vl0EiJ4WtEGoT12MZetl0",
     authDomain: "apptest-coder.firebaseapp.com",
     projectId: "apptest-coder",
     storageBucket: "apptest-coder.appspot.com",
     messagingSenderId: "249762702237",
     appId: "1:249762702237:web:81e8153b7113eacd814574"
})

export function getFirebase(){
     return app
}
export function getFirestore(){
     return firebase.firestore(app)
}