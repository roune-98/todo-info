import React from 'react'


export const UserContext = () => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  return (
    <div>UserContext</div>
  )
}


export default UserContext