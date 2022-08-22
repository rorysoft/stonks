import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: 'AIzaSyAEe-c8Zy9H2BuhNThP6tHuUE8pO-XEDFs',
	authDomain: 'slackcloners.firebaseapp.com',
	projectId: 'slackcloners',
	storageBucket: 'slackcloners.appspot.com',
	messagingSenderId: '369083184712',
	appId: '1:369083184712:web:7039806e955476019eca7d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
