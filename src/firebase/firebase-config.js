import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {firebase} from 'firebase/app';
// import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'REACT_APP_FIREBASE_API_KEY',
  projectId: 'REACT_APP_FIREBASE_PROJECT_ID',
  storageBucket: 'REACT_APP_FIREBASE_STORAGE_BUCKET',
  messagingSenderId: 'REACT_APP_FIREBASE_MESSAGING_SENDER_ID',
  appId: 'REACT_APP_FIREBASE_APP_ID',
};

const app = initializeApp(firebaseConfig);
// const storage = firebase.storage();
export const db = getFirestore(app);
// export {storage, firebase as default};