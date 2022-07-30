import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyDkP_l7jiM5ojAYe3chpFzjbqSwruDAj8w",
  authDomain: "geeky-utp.firebaseapp.com",
  projectId: "geeky-utp",
  storageBucket: "geeky-utp.appspot.com",
  messagingSenderId: "590092155100",
  appId: "1:590092155100:web:3c931e8bd32c3fdc975c19",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadImage = async (file) => {
    const storageRef = ref(storage, v4());
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
};
