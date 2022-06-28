import React from 'react'
import Update from '../../Outils/Update';
import {GrDocumentUpdate} from 'react-icons/gr'
import { Link, Route } from 'react-router-dom'
import card from "./card.jpg"
import './CardCours.css' 


import { BiArchiveIn } from 'react-icons/bi'
 //import rCouril from '../ail,../'
 import{useEffect, useState} from 'react'
 import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
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
    const deleteUser = (id)=>{
        deleteDoc(doc(db,"cours",id))
    }
    return (
        <div className='container my-2
        ' id='dr'>

            <div className='row justify-content-center '>
            <div className='col col-md-4 '>
            {
                usersList.map((user,index)=>{
                    return(


                        <div key={index} className="card" style={{width: "18rem;", borderRadius:"15px 15px 15px 15px",}}>
                        <Link to="">
                            <img src={card} className="card-img-top" alt="Sunset Over the Sea"/>
                        </Link>
                        <div className="card-body " 
                            style={{ }}

                                    >
                                          <h3 className="mb-1" style={{color:"#fff"}}>{user.titre}</h3>
                                          <p className="mb-1" style={{color:"#fff"}}>{user.description}</p>
                        
                                            <button type="button" className="btn1 "><BiArchiveIn/> </button>
                                                                           
                                        <button className='btn btn-warning ' onClick={e=>setUser(user)}><GrDocumentUpdate/></button>
                                
                            </div>
                    </div>
                      )
                        }) };
                        
      </div>
            </div>
           
                            
            
        </div>
    )
}

export default ListerCour;
