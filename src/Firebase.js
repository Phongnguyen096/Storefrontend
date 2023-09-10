import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCTt06N4m_6gPLemNqsc7gd5LD8QIrWMSY',
    authDomain: 'gstore-version1.firebaseapp.com',
    projectId: 'gstore-version1',
    storageBucket: 'gstore-version1.appspot.com',
    messagingSenderId: '786978801137',
    appId: '1:786978801137:web:5a479133fd076f231ab050',
    measurementId: 'G-RHTGJ41QSX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const dbFireStore = getFirestore(app);
