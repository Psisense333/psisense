import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUe35dI_lBPL8-IvbfVPeyWqpssG5vw0M",
  authDomain: "psisense-25a18.firebaseapp.com",
  projectId: "psisense-25a18",
  storageBucket: "psisense-25a18.firebasestorage.app",
  messagingSenderId: "672385956693",
  appId: "1:672385956693:web:7a9a70cb4b8e5c4771cddc"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default db;