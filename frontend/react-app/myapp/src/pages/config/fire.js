import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCACTX2DpCPGbO6lW-qSE2jjzLLSdPX4IE",
    authDomain: "bookstore-ff5bc.firebaseapp.com",
    projectId: "bookstore-ff5bc",
    storageBucket: "bookstore-ff5bc.appspot.com",
    messagingSenderId: "96265712100",
    appId: "1:96265712100:web:b53b81da7947b20f7a57f1"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;