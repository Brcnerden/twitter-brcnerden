import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { FIREBASE_APP } from "../api/firebase-config";

const auth = getAuth(FIREBASE_APP); // kullanmak istediğin Firebase hizmetini başlatma işlevine aktarır.

// geriye dönüşte data.user kontrol edilecek var ise devam, yok ise hataya düşer hatayı ekrana error.message olarak basabilirsin.
const createAuth = async (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// geriye dönüşte data.user kontrol edilecek var ise devam, yok ise hataya düşer hatayı ekrana error.message olarak basabilirsin.
const signInUser = async (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

const isUserSingIn = async (callback) => onAuthStateChanged(auth, callback); //kullanıcının giriş yapıp yapmadığını kontrol eder.

export { createAuth, signInUser, isUserSingIn };
