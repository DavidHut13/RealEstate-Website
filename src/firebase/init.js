import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBrLXfxPfTNmIky2OpUO5CWAvwifp72uWo",
  authDomain: "auctionnetwork-1558556770854.firebaseapp.com",
  databaseURL: "https://auctionnetwork-1558556770854.firebaseio.com",
  projectId: "auctionnetwork-1558556770854",
  storageBucket: "auctionnetwork-1558556770854.appspot.com",
  messagingSenderId: "42024295402",
  appId: "1:42024295402:web:3c18452183bace9d"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  export default firebaseApp.firestore()
  var database = firebase.database();
  
