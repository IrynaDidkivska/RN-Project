// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWFFbYHEKtih7zlycY-FkliQsq8rcgN4U",
  authDomain: "post-creator-60ebf.firebaseapp.com",
  projectId: "post-creator-60ebf",
  storageBucket: "post-creator-60ebf.appspot.com",
  messagingSenderId: "597640690045",
  appId: "1:597640690045:web:cb85b9198461d4c968f414",
  measurementId: "G-LJQHLDNP61",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
