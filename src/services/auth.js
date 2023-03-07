import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { FIREBASE_APP } from "../api/firebase-config";

const auth = getAuth(FIREBASE_APP); // kullanmak istediğin Firebase hizmetini başlatma işlevine aktarır.

// geriye dönüşte data.user kontrol edilecek var ise devam, yok ise hataya düşer hatayı ekrana error.message olarak basabilirsin.
const createUser = async (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// geriye dönüşte data.user kontrol edilecek var ise devam, yok ise hataya düşer hatayı ekrana error.message olarak basabilirsin.
const signInUser = async (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export { createUser, signInUser, auth };
