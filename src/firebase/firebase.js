import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF-ozzh4RQn2BZkmMbUnnU2g9l-o0rM1I",
  authDomain: "view-js-648f8.firebaseapp.com",
  projectId: "view-js-648f8",
  storageBucket: "view-js-648f8.firebasestorage.app",
  messagingSenderId: "125740225841",
  appId: "1:125740225841:web:00eb4e8e78518b19030c10",
  measurementId: "G-SNRLCMXEW7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth}