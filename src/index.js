import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'firebase/app'
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

//var firebase = require('firebase/app');
require('firebase/firestore');
require('dotenv').config();

const firebaseConfig = {

    // please visit .env_Sample for API_KEY
    apiKey: process.env.API_KEY, 

    authDomain: "paperwork-ac719.firebaseapp.com",
    projectId: "paperwork-ac719",
    storageBucket: "paperwork-ac719.appspot.com",
    messagingSenderId: "194976899556",
    appId: "1:194976899556:web:417eb86a81b9dc9f3667f1",
    measurementId: "G-K9XYWPXYBG"
};
firebase.initializeApp(firebaseConfig);

// React DOM takes <APP /> and renders it

ReactDOM.render(
    <App />,
  document.getElementById('paperwork container')
);
reportWebVitals();
