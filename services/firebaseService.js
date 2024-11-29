import admin from "firebase-admin";
import functions from "firebase-functions";
import dotenv from "dotenv";
dotenv.config();

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_KEY_AUTH_DOMAIN,
  // databaseURL: process.env.VUE_APP_KEY_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_ID,
};

admin.initializeApp(config);
const db = admin.firestore();
const auth = admin.auth();

export { db, functions, auth };
