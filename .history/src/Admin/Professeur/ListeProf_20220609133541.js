import React from 'react'
import Update from '../../Outils/Update';
import {GrUpdate} from 'react-icons/gr'
import {MdDelete} from 'react-icons/md'

import {BiMessageAltDetail, BiArchiveIn} from 'react-icons/bi'
 //import profil from '../../'
 import{useEffect, useState} from 'react';
 import { useNavigate } from 'react-router-dom';
 import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
 import { db } from '../../firebase-config';


 const ShowList=(props)=>{

    return(

    )
 }
const ListeProf = () => {
    const [user,setUser] = useState(null)
     const [usersList,setUserList] = useState([])
     const navigate = useNavigate()
    useEffect(()=>{
        onSnapshot(collection(db,"professeurs"),
        (snapshot)=>{
            setUserList(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
                console.log(user);
                return user
            }))
        })
        
    },[])
    const Update =(user)=>{
        setUser(user)
    }
    const deleteUser = (id)=>{
        deleteDoc(doc(db,"professeurs",id))
    }
    return (
        <div className='container'>
           
                           
                            {
                                         
                                         user && <Update user={user} />
   
                                          }
   
        </div>
    )
}

export default ListeProf;