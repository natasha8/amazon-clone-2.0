import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDFPegWBSRRlTE63BNWR_O5tVTgJ9Lq0y0",
	authDomain: "clone-2b546.firebaseapp.com",
	projectId: "clone-2b546",
	storageBucket: "clone-2b546.appspot.com",
	messagingSenderId: "685391869668",
	appId: "1:685391869668:web:ba10819a1c04b6b4af1ef1",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();
const db = app.firestore();

export default db;
