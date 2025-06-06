// assets/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail // ✅ 추가된 비밀번호 재설정 함수
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// ✅ Firebase 설정
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

// ✅ 다른 파일에서 사용할 수 있도록 export
export {
  auth,
  db,
  ref,
  set,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail // ✅ 이 줄도 반드시 export에 포함!
};
