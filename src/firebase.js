const firebaseConfig = {
    apiKey: "AIzaSyAzTUEI1zNOsLH1ZzCrNiaWVfBkViwxaeo",
    authDomain: "disney-plus-e2b22.firebaseapp.com",
    projectId: "disney-plus-e2b22",
    storageBucket: "disney-plus-e2b22.appspot.com",
    messagingSenderId: "830489617739",
    appId: "1:830489617739:web:acc9163415fec55d3674ce",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;