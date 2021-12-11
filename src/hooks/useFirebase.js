import initializeAuthentication from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  onAuthStateChanged,
  getAuth,
  signOut,
} from "firebase/auth";
import { useState } from "react";
initializeAuthentication();

const useFirebase = () => {
    const [currentUser, setCurrentUser] = useState();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // register user
    const signUpUser = (email, password, username ) =>{
      return createUserWithEmailAndPassword(auth, email, password)

      // update profile
        updateProfile(auth.currentUser, {
          displayName:username
        })

        const user = auth.currentUser;
        setCurrentUser({
          ...user
        })
    }

    // login user
    const loginUser = (email, password) =>{
      return signInWithEmailAndPassword(auth, email, password)
    }
    // logout
    const logOutUser = () =>{
      signOut(auth).then()
    }

  return {
    currentUser,
    signUpUser,
    loginUser,
    logOutUser,
  };
};

export default useFirebase;
