import React from 'react'
 //import profil from '../../'
 import{useEffect, useState} from 'react'
 import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
 import { db } from '../../firebase-config';

const ListeProf = () => {
    const [user,setUser] = useState(null)
     const [usersList,setUserList] = useState([])
    useEffect(()=>{
        onSnapshot(collection(db,"users"),
        (snapshot)=>{
            setUserList(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
                console.log(user);
                return user
            }))
        })
        
    },[])
    return (
        <div className='container'>
            {
                usersList.map((user,index)=>{
            }
            
        </div>
    )
}

export default ListeProf;