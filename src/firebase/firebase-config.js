import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {firebase} from 'firebase/app';



const firebaseConfig = {
  apiKey: "AIzaSyDqXOkgl09Lv2kImcTO6qiDZ7tid772F1o",
  authDomain: "take-care-43765.firebaseapp.com",
  projectId: "take-care-43765",
  storageBucket: "take-care-43765.appspot.com",
  messagingSenderId: "759449956631",
  appId: "1:759449956631:web:348ca7602e72a2d10a0752"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

