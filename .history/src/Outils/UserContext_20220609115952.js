import React from 'react'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';
import {auth} from '../firebase-config';
import { createContext, useState, useEffect } from 'react';


export const UserContext = createContext();

export function UserContextProvider(props){

     // user va etre celui qui s'inscrit et se conecter 
     const [currentUser, setCurrentUser] = useState();
     // ici c'est le temps qu'on recoit une reponse depuis firebase
     const [loadingData, setLoadingData]= useState(true) 
     // cette fonction unsubscribe nous permet si il ya un utilisateur 
     //sinon

    const signUp = (email,pwd) => createUserWithEmailAndPassword
    (auth,email,pwd)
    const signIn = (email,pwd) => signInWithEmailAndPassword
    (auth,email,pwd)

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setCurrentUser(currentUser)
        setLoadingData(false)
    })
    return unsubscribe;
    },[])

    return(
        // c'est lui qui va apporter le continue de donnes de tout ce qui la entourer
        // {props.children}: correspond a APP
        // UserContext.provider: c'est un composant de orede superieur
        <UserContext.Provider value={{signUp, currentUser, signIn, logout,  resetPassword, updateEmail, updatePassword}}>
            {!loadingData && props.children}
        </UserContext.Provider>
    )
}