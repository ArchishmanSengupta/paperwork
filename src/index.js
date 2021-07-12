import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebase = require('firebase');
require('firebase/firestore');
require('dotenv').config();

//console.log(process.env);

firebase.initializeApp(
  {
    apiKey: process.env.API_KEY, // please visit .env_Sample for API_KEY
    authDomain: "paperwork-ac719.firebaseapp.com",
    projectId: "paperwork-ac719",
    storageBucket: "paperwork-ac719.appspot.com",
    messagingSenderId: "194976899556",
    appId: "1:194976899556:web:417eb86a81b9dc9f3667f1",
    measurementId: "G-K9XYWPXYBG"
  }
);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
