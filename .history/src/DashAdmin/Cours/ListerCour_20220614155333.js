import React from 'react'
import {GrDocumentUpdate} from 'react-icons/gr'
import { Link, Route } from 'react-router-dom'
import card from "./card.jpg"
import './CardCours.css' 
import UpdateCours from './UpdateCours';
import { BiArchiveIn ,BiMessageAltDetail} from 'react-icons/bi'
 
 import{useEffect, useState} from 'react'
 import { collection, onSnapshot } from 'firebase/firestore';
 import { db } from '../../firebase-config';

const ListerCour = () => {
    const [user,setUser] = useState({titre:'', description:""})
     const [usersList,setUserList] = useState([])
    
    useEffect(()=>{
        onSnapshot(collection(db,"cours"),
        (snapshot)=>{
            setUserList(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
                console.log(user);
                return user
            }))
        })
        
    },[])
    // const deleteUser = (id)=>{
    //     deleteDoc(doc(db,"cours",id))
    // }
    return (
        <div className=' my-5' id='dr'>
            <div className='container '>
                <div className='row'>
                    {
                        usersList.map((cour,index)=>{
                            return(


        </div>
    )
}

export default ListerCour;
