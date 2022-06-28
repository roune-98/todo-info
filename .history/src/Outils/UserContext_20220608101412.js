import React from 'react'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';
import {auth} from '../firebase-config';
import { createContext, useState, useEffect } from 'react';


const UserContext =()=> {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailEror, setEmailEror] = useState('');
    const [passwordEror, setPasswordEror] = useState('');
    const[hasAcount, setHasAcount] = useState(false);
  
    const clearInput =() =>{
      setEmail('');
      setPassword('');
    };
    const clearEror =() =>{
      setEmailEror('');
      setPasswordEror('');
    }
  
    const handleLogIn = () =>{
      clearEror();
      
      const signIn = (email,pwd) => signInWithEmailAndPassword
      (auth,email,pwd)
      .catch((err) =>{
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "user-not-found":
            setEmailEror(err.message);
            break;
            case "auth/wrong-password":
              setPasswordEror(err.message);
              break;
        }
      });
    };
    const handleSinUp =() =>{
      clearEror();
    
      const signUp = (email,pwd) => createUserWithEmailAndPassword
(auth,email,pwd)
      // permet de connecter sur le fireStore
      .then((useCreatBe) =>{
        const user= useCreatBe.user
        db.collection('users').add({
          name:user.displayName,
          email:user.email,
          userId:user.uid
        })
        console.log(user)
      })
      .catch((err) =>{
    
        switch(err.code){ 
          case "auth/email-already-in-use":
          case "auth/invalid=email":
            setEmailEror(err.message);
            break;
            case "auth/weak-password":
              setPasswordEror(err.message);
              break;
        }
       
      }  );
    };
    const handleLogOut =() =>{
      fire.auth().signOut();
    };
    const authListner =() =>{
      fire.auth().onAuthStateChanged((user) =>{
        if (user){
          clearInput();
          setUser(user);  
        }else{
            setUser("");
        }
      });
    }
    useEffect(()=>{
      authListner();
    },[]);
    return (
      <div className="">
        {/**si user existe affiche home page
         * sinon appel Login page
         */}
        {user ? (
           <Home  handleLogOut={handleLogOut}/>
  
        ):(
          <Login 
          email={email}
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword}
          handleLogIn={handleLogIn}
          handleSinUp={handleSinUp}
          hasAcount= {hasAcount}
          setHasAcount={setHasAcount}
          emailEror={emailEror}
          passwordEror={passwordEror}
   
          />
        )}
        
      </div>
    );
  }
  
  export default UserContext;