import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDQJjQcCn_65N34qCuNpDhNOUQtqSFPMPo",
    authDomain: "expenses-a9be7.firebaseapp.com",
    databaseURL: "https://expenses-a9be7.firebaseio.com",
    projectId: "expenses-a9be7",
    storageBucket: "expenses-a9be7.appspot.com",
    messagingSenderId: "836582084790"
  };
  firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Andrew M',
  age: 26,
  isSingle: false,
  location: {
    city: 'Philadelphia',
    country: 'United States'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((error) => {
  console.log('Error: ' + error);
});

// firebase.database().ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('New York');

database.ref('attributes').set({
  height: 180,
  weight: 100
}).then(() => {
  console.log('Data stored');
}).catch((error) => {
  console.log('Oups ', error);
});
