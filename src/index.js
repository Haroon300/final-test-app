import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWcCf4xXZVumAWHPsw5KPL8WGxJ2t62hA",
  authDomain: "auth-aab10.firebaseapp.com",
  projectId: "auth-aab10",
  storageBucket: "auth-aab10.appspot.com",
  messagingSenderId: "566128560371",
  appId: "1:566128560371:web:db1b5e3057e27f3e218f86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
