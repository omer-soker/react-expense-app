import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// //child_removed

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
  
// });

// //child_changed

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// }, (e) => {
//   console.log('Error fetching data',e);
// });



// database.ref('expenses').push(
//   {
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 0
//   }
// );

// database.ref('expenses').push(
//   {
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 1000
//   }
// );

// database.ref('expenses').push(
//   {
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: 1000000
//   }
// );

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   const name = val.name;
//   const title = val.job.title;
//   const company = val.job.company;
//   console.log(`${name} is a ${title} at ${company}.`);
// }, (e) => {
//   console.log('Error fetching data',e);
// });

// setTimeout(() => {
//   database.ref().off('value',onValueChange);
// },5000);

 
// database
//   .ref()
//   .set({
//     name: "omar",
//     age: 30,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google'
//     },
//     location: {
//       city: "Ankara",
//       country: "Turkey"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch(e => {
//     console.log("This failed ", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Data removed");
//   })
//   .catch(e => {
//     console.log("Data can not be removed", e);
//   });

// database.ref('age').set(31);
// database.ref('location/city').set('Istanbul');

// database
//   .ref("attributes")
//   .set({
//     height: 170,
//     weight: 74
//   })
//   .then(() => {
//     console.log("Attributes saved!");
//   })
//   .catch(e => {
//     console.log("Saving attributes failed", e);
//   });
