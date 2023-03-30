import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgP2-Tbu89_c5EW8hBLxGLjjVhni00oHc",
  authDomain: "app-devmind.firebaseapp.com",
  projectId: "app-devmind",
  storageBucket: "app-devmind.appspot.com",
  messagingSenderId: "292721660699",
  appId: "1:292721660699:web:813a21f3e5355876b5f9be",
  measurementId: "G-NK701T3C8W",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
