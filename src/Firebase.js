import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

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
//const analytics = getAnalytics(app);
export const dbFireStore = getFirestore(app);

//
const storage = getStorage();
export const avatarProductRef = (fileName) => ref(storage, 'avatarProductImage/' + fileName);
export const listImageProductRef = (fileName) => ref(storage, 'productImage/' + fileName);
export const UploadTask = (storageRef, file) => uploadBytesResumable(storageRef, file);
export const UploadAndSetFireStoreDB = (uploadTask, data, refCollection) => {
    uploadTask.on(
        'state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                default:
                    console.log('Upload fail');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
                default:
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                if (refCollection === 'productAvatar') {
                    await addDoc(collection(dbFireStore, refCollection), {
                        ...data,
                        imageURL: downloadURL,
                    });
                } else if (refCollection === 'productImage') {
                    await addDoc(collection(dbFireStore, refCollection), {
                        ...data,
                        imageURL: downloadURL,
                    });
                }
            });
            console.log('Upload complete');
        },
    );
};
