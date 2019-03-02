import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_API_KEY_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_API_KEY_MSG_SENDER_ID
};

firebase.initializeApp(config);

export default firebase;
