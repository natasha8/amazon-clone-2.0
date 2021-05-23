import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD24TBuEy48NKiwMf2Zmg8KiEPF7nDjRGQ",
	authDomain: "amaz-fd33d.firebaseapp.com",
	projectId: "amaz-fd33d",
	storageBucket: "amaz-fd33d.appspot.com",
	messagingSenderId: "930332166199",
	appId: "1:930332166199:web:ef974e81937e268ab4d7b2",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();
const db = app.firestore();

export default db;
