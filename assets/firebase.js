// assets/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// ✅ 여기에 당신의 Firebase 설정값을 입력하세요
const firebaseConfig = {
  apiKey: "AIzaSyB4oy-XqRtd4BTAMNuV8eOrLqbDEi5MFyU",
  authDomain: "korean-pronunciation-trainer.firebaseapp.com",
  databaseURL: "https://korean-pronunciation-trainer-default-rtdb.firebaseio.com",
  projectId: "korean-pronunciation-trainer",
  storageBucket: "korean-pronunciation-trainer.firebasestorage.app",
  messagingSenderId: "296207160806",
  appId: "1:296207160806:web:bb44b25cc98e10a6ca3227"
};
// ✅ Firebase 초기화
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// ✅ export해서 다른 html에서 사용할 수 있도록
export {
  auth,
  db,
  ref,
  set,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
};
