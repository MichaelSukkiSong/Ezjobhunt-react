import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
// import { getFunctions, httpsCallable } from 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyCWDK4Dczs1KBhnmuZSH1UbvlnbYFuXpsY',
  authDomain: 'ezjobhunt-6a34f.firebaseapp.com',
  projectId: 'ezjobhunt-6a34f',
  storageBucket: 'ezjobhunt-6a34f.appspot.com',
  messagingSenderId: '759583787906',
  appId: '1:759583787906:web:d769e9dfc76dc3d71a9d9b',
  measurementId: 'G-7HR8RXDNDQ',
};

const app = initializeApp(firebaseConfig);

export default app;

// const db = getFirestore(app);

// try {
//   const docRef = await addDoc(collection(db, 'users'), {
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815,
//   });
//   console.log('Document written with ID: ', docRef.id);
// } catch (e) {
//   console.error('Error adding document: ', e);
// }

// try {
//   const docRef = await addDoc(collection(db, 'users'), {
//     first: 'Alan',
//     middle: 'Mathison',
//     last: 'Turing',
//     born: 1912,
//   });

//   console.log('Document written with ID: ', docRef.id);
// } catch (e) {
//   console.error('Error adding document: ', e);
// }

// const querySnapshot = await getDocs(collection(db, 'users'));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// const functions = getFunctions();
// const addMessage = httpsCallable(functions, 'addMessage');
// addMessage({ text: messageText })
//   .then((result) => {
//     // Read result of the Cloud Function.
//     /** @type {any} */
//     const data = result.data;
//     const sanitizedMessage = data.text;
//   })
//   .catch((error) => {
//     // Getting the Error details.
//     const code = error.code;
//     const message = error.message;
//     const details = error.details;
//     // ...
//   });
