import * as firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from "firebaseui";
import { firebaseConfig } from "../firebaseConfig";

export const firebaseProject = firebase.initializeApp(firebaseConfig);
