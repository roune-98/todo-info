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
        <div className='container'>
           
        <table className="table align-middle mb-0 bg-white mt-5 ">
                             <thead style={{color:"#fff", backgroundColor:"#002639"}}>
                                 <tr>
                                 <th>titre</th>
                                 <th>description</th>
                                 <th>Archive</th>
                                 <th>Update</th>
                                 <th>Detail</th>
                                 
                                 </tr>
                             </thead>
                             <tbody>>
                    {
                        usersList.map((user,index)=>{
                            if(user.archive === false){
                                return(


                                    <tr key={index}>
                                    <td>

                                    <p className="mb-1" style={{color:"#07090b"}}>{cour.titre}</p>
                                       
                                    </td>
                                    <td>
                                    <p className="mb-1" style={{color:"#07090b"}}>{cour.description}</p>
                                        
                                    </td>
                                   <td>
                                        <button 
                                                type="button"
                                                className="btn" 
                                                style={{
                                                    backgroundColor:"#B4042C", 
                                                    color:"#fff",
                                                    fontSize:"16px",
                                                    fontWeight:"bolder",
                                                    width:'60px'
                                                }}
                                            >
                                               <BiMessageAltDetail/>
                                            </button>                       
                                    </td>
                                    <td>
                                        <UpdateCours user={user} />
                                       
                                       <button className='btn btn-warning col' data-bs-toggle="modal" data-bs-target="#coursModal"onClick={e=> setUser(cour)} ><GrDocumentUpdate/></button>
                                    </td>
                                    <td>
                                        <button 
                                            type="button"
                                            className="btn" 
                                            style={{
                                                backgroundColor:"#591945", 
                                                color:"#fff",
                                                fontSize:"16px",
                                                fontWeight:"bolder",
                                                width:'60px'
                                            }}
                                        >
                                            <BiArchiveIn/>
                                        </button>
                                    </td> 
                                   
                                   
                                </tr>
                            )
                            }
                           
                                }) };
                                
                </div>
            </div>
           
                            
            
        </div>
    )
}

export default ListerCour;
