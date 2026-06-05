import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgxaiNGcBm9Fp6J4EXfQRlaXFHy6TfQaI",
  authDomain: "founderos-f25c3.firebaseapp.com",
  projectId: "founderos-f25c3",
  storageBucket: "founderos-f25c3.firebasestorage.app",
  messagingSenderId: "613568478463",
  appId: "1:613568478463:web:1c2c07bbdedd2d632960ca",
  measurementId: "G-SV1VDKHKYY",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);