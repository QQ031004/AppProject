import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: (Har tagit bort APIkey från GitHub 2019-05-28, Fråga mig om det)
    authDomain: "qq-testapp-97a98.firebaseapp.com",
    databaseURL: "https://qq-testapp-97a98.firebaseio.com",
    projectId: "qq-testapp-97a98",
    storageBucket: "qq-testapp-97a98.appspot.com",
    messagingSenderId: (Har tagit bort ID från GitHub 2019-05-28, Fråga mig om det)
  };


  firebase.initializeApp(config);
  //firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
