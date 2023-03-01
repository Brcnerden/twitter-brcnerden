// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAS6EfgQBLtEX9_QeIYRWXc6jNZzTeIZe8',
  authDomain: 'twitterclone-3dd66.firebaseapp.com',
  projectId: 'twitterclone-3dd66',
  storageBucket: 'twitterclone-3dd66.appspot.com',
  messagingSenderId: '551377674599',
  appId: '1:551377674599:web:74b473382a048a848b8fc2',
  measurementId: 'G-PCNX2QTMQW',
};

export const FIREBASE_APP = initializeApp(firebaseConfig); // firebase ile bağlantı gerçekleştirebilmek için .
