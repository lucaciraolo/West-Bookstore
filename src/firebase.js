import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

export const firebaseProject = firebase.initializeApp(firebaseConfig);
