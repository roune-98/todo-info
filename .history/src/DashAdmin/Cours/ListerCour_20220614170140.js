import React from 'react'
import UpdateCours from './UpdateCours'
import {GrDocumentUpdate} from 'react-icons/gr'
import { Link, Route } from 'react-router-dom'
import './CardCours.css' 
import { BiArchiveIn ,BiMessageAltDetail} from 'react-icons/bi'
 
 import{useEffect, useState} from 'react'
 import { collection, deleteDoc, doc, onSnapshot,setDoc } from 'firebase/firestore';
 import { db } from '../../firebase-config';

const ListerCour = () => {
    const [user,setUser] = useState(null)
     const [usersList,setUserList] = useState([])
    
    useEffect(()=>{
        onSnapshot(collection(db,"coursbi"),
        (snapshot)=>{
            setUserList(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
                console.log(user);
                return user
            }))
        })
       
    },[])

    
    }
    
    )}

export default ListerCour;
