import { getFirestore } from "firebase/firestore";

import { FIREBASE_APP } from "../api/firebase-config";
import { doc, setDoc } from "firebase/firestore";

const USERS = "users";

const db = getFirestore(FIREBASE_APP);

const createUser = async (uid, data) => setDoc(doc(db, USERS, uid), data);

export { createUser, db };
