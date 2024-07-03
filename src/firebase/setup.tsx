
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB-DkhDEphVkEaiJZX1NipUnKtuJUtl678",
  authDomain: "olx-clone-55e5b.firebaseapp.com",
  projectId: "olx-clone-55e5b",
  storageBucket: "olx-clone-55e5b.appspot.com",
  messagingSenderId: "882683847226",
  appId: "1:882683847226:web:38427c99549a537dda4b03"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()