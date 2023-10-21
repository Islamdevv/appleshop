import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuq2cQgSpC9JkOMSTEip349pd0WUsgB-g",
  authDomain: "appleshop-9a489.firebaseapp.com",
  projectId: "appleshop-9a489",
  storageBucket: "appleshop-9a489.appspot.com",
  messagingSenderId: "1067187245339",
  appId: "1:1067187245339:web:523b6754b5fbd5bf0cc3be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
