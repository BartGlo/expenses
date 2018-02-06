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

database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

// const onValueChange = database.ref('expenses').on('value', (snapshot) =>{
//   const expenses = [];
//   snapshot.forEach((snapKid) => {
//     expenses.push({
//       id: snapKid.key,
//       ...snapKid.val()
//     });
//   });
//   console.log(expenses);
// });
//
// setTimeout(() => {
//   database.ref('expenses').push({
//     description: 'Games',
//     note: '',
//     amount: 12000,
//     createdAt: 1000
//   });
// }, 5000)



// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((snapKid) => {
//       expenses.push({
//         id: snapKid.key,
//         ...snapKid.val()
//       });
//     });
//
//     console.log(expenses);
//   })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     let expenses = [];
//     snapshot.forEach((snapKid) => {
//       console.log(snapKid.val());
//       expenses.push(snapKid.val());
//     });
//     console.log(expenses);
//   })

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'Last one in this flat',
//   amount: 120000,
//   createdAt: 1000
// });
//
// database.ref('expenses').push({
//   description: 'Phone',
//   note: 'iPhone X',
//   amount: 120000,
//   createdAt: 2000
// });
//
// database.ref('expenses').push({
//   description: 'Food',
//   note: 'Healthy',
//   amount: 5000,
//   createdAt: 3000
// });


// database.ref('notes/-L4cGx18A3gR3WlU8zRj').remove();


// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//   notes: {
//
//   }
// }
//
// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note'
// }];
//
// database.ref('notes').set(notes)

// const onValueChange = database.ref().on('value', (snapshot) =>{
//   let name = snapshot.val().name;
//   let job = snapshot.val().job.title;
//   let company = snapshot.val().job.company;
//   console.log(`${name} is ${job} at ${company}`);
// });
//
// setTimeout(() => {
//   database.ref('job/company').set('Google');
// }, 5000);

// setTimeout(() => {
//   database.ref().off();
// }, 10000);

// setTimeout(() => {
//   database.ref('age').set(32);
// }, 15000);



// database.ref()
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e) => {
//   console.log('Error fetching data', e);
// })

// database.ref().set({
//   name: 'Andrew M',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((error) => {
//   console.log('Error: ' + error);
// });
//
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref().set({
//   name: 'Andrew M',
//   age: 26,
//   job: 'software dev',
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((error) => {
//   console.log('Error: ' + error);
// });

// database.ref().update({
//   job: 'manager',
//   'location/city': 'Boston'
// });
// database.ref().update({
//   name: 'Mike',
//   age: 29,
//   job: 'Software dev',
//   isSingle: null
// })


//database.ref('isSingle').set(null);

// database.ref('isSingle').remove().then(() => {
//   console.log('Removed!');
// }).catch((error) => {
//   console.log('Oups ', error);
// })
