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


                                    <div key={index} className="card tr col-4 ">
                                        <Link to="">
                                            <img src={card} className="card-img-top" alt="Sunset Over the Sea"/>
                                        </Link>
                                        <div className="card-body "  >
                                        
                                            <h3 className="mb-1" >{cour.titre}</h3>
                                            <p className="mb-1" >{cour.description}</p>
                                            <ul>
                                                <li>
                                                <h6> Archive</h6>
                                            <button type="button" className="btn1 rounded"> <BiArchiveIn/>  </button> 
                                            </li> 
                                            <li>
                                            <h6> Update</h6>          
                                             <button className='btn2 rounded' data-bs-toggle="modal" data-bs-target='#coursModal' onClick={e=>setUser(cour)}><GrDocumentUpdate/></button> 
                                            <li>
                                             <h6>Detail</h6>
                                            <button className='btn3 rounded' onClick={e=>setUser(user)}><BiMessageAltDetail/></button>
                                            
                                           
                                                </li>
                                            </ul>
                                            
                                            
                            
                                        </div>
                                    </div>
                            )
                                }) }
                                {
                                     <UpdateCours user={user} /> 
                                }
                                
                </div>
            </div>
           
                            
            
        </div>
    )
}

export default ListerCour;
