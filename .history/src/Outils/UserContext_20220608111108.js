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
 
const signUp = (email,pwd) => createUserWithEmailAndPassword
(auth,email,pwd)
const signIn = (email,pwd) => signInWithEmailAndPassword
(auth,email,pwd)
   // user va etre celui qui s'inscrit et se conecter 
   const [currentUser, setCurrentUser] = useState();
   // ici c'est le temps qu'on recoit une reponse depuis firebase
   const [loadingData, setLoadingData]= useState(true) 
   // cette fonction unsubscribe nous permet si il ya un utilisateur 
   //sinon
   useEffect(() =>{
   const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
       setCurrentUser(currentUser)
       setLoadingData(false)
   })
   return unsubscribe;
},[])
// creation des donnees
//---------- La partie Modals ---------//
    const [modalState, setModalState]= useState({
        signUpModal:false,
        signInModal:false
    })
    const toggleModals = modal =>{
        if (modal=== "signIn"){
            setModalState({
                signUpModal:false,
                 signInModal:true
            })
        }
        if (modal=== "signUp"){
            setModalState({
                signUpModal:true,
                 signInModal:false
            })
        }
       
    }
    return(
        // c'est lui qui va apporter le continue de donnes de tout ce qui la entourer
        // {props.children}: correspond a APP
        // UserContext.provider: c'est un composant de orede superieur
        <UserContext.Provider value={{modalState,signUp, currentUser, signIn}}>
            {!loadingData && props.children}
        </UserContext.Provider>
    )
}