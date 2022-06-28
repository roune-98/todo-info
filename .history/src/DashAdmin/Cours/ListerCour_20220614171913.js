import React from 'react'
import Update from '../../Outils/Update';
import {GrDocumentUpdate} from 'react-icons/gr'
import { Link, Route } from 'react-router-dom'
import card from "./card.jpg"
import './CardCours.css' 

import { BiArchiveIn ,BiMessageAltDetail} from 'react-icons/bi'
 //import rCouril from '../ail,../'
 import{useEffect, useState} from 'react'
 import { collection, deleteDoc, doc, onSnapshot,setDoc } from 'firebase/firestore';
 import { db } from '../../firebase-config';

const ListerCour = () => {
    const [user,setUser] = useState(null)
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

    
    
    
 

    const archiveCours = (user)=>{
        user.archive = true;
        setDoc(doc(db,"cours",user.id),user)
    }
    return (
        <div className=' my-5' id='dr'>
            <div className='container '>
                <div className='row'>
                    {
                        usersList.map((user,index)=>{
                            if(user.archive === false){
                                return(


                                    <div key={index} className="card tr col-4 ">
                                        <Link to="">
                                            <img src={card} className="card-img-top" alt="Sunset Over the Sea"/>
                                        </Link>
                                        <div className="card-body "  >
                                            
                                            <h3 className="mb-1" >{user.titre}</h3>
                                            <p className="mb-1" >{user.description}</p>
                        
                                            <button type="button" className="btn1 rounded"><BiArchiveIn onClick={e=>archiveCours(user)} />  </button>
                                                                            
                                            <button className='btn2 rounded' onClick={e=>setUser(user)}><GrDocumentUpdate/></button>
                                            <button className='btn3 rounded' onClick={e=>setUser(user)}><BiMessageAltDetail/></button>
                            
                                        </div>
                                    </div>
                            )
                            }
                           
                                }) };
                                
                </div>
            </div>
           
                            
            
        </div>
    )
}

export default ListerCour;
