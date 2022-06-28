import React, { useEffect } from 'react';
import { useState } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

const UpdateProf = (props) => {
    
    
    useEffect(()=>{
        setNom(props.user.nom)
        setPrenom(props.user.prenom)
        setTel(props.user.tel)
    },[])
    const updateUser = (e)=>{
        // pour empecher que la page se raffrechie automatiquement
        e.preventDefault()
        // setDoc(doc(db,"users","defaultuser"),{name})
        let user = {
        nom,
        prenom,
        tel
        }
        
        setDoc(doc(db,"professeurs",props.user.id),user)
    }
    return (
        <>
           
        </>
    );
};

export default UpdateProf;