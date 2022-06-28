import React from 'react'

import {GrDocumentUpdate} from 'react-icons/gr'
import UpdateCours from './UpdateCours'
import './CardCours.css' 

import { BiArchiveIn ,BiMessageAltDetail} from 'react-icons/bi'

 import{useEffect, useState} from 'react'
 import { collection, deleteDoc, doc, onSnapshot,setDoc } from 'firebase/firestore';
 import { db } from '../../firebase-config';

const ListerCour = () => {
    const  [user,setUser] = useState({titre:"",description:""})
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
    const archiveCours =(user)=>{
        user.archive=true;


    }
    // const deleteUser = (id)=>{
    //     deleteDoc(doc(db,"Apprenents",id))
    // }
    return (
        <div className='container'>
           
           <table className="table align-middle mb-0 bg-white mt-5 ">
                                <thead style={{color:"#fff", backgroundColor:"#002639"}}>
                                    <tr>
                                    <th>Titre</th>
                                    <th>Categorie</th>
                                    <th>Niveau</th>
                                    <th>Description</th>
                                    <th>update</th>
                                    <th>Archive</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    usersList.map((cour,index)=>{
                                        return(
                                           
                                    <tr key={index}>
                                        <td>

                                        <p className="mb-1" style={{color:"#07090b"}}>{cour.titre}</p>
                                           
                                        </td>
                                        <td>

                                        <p className="mb-1" style={{color:"#07090b"}}>{cour.categorie}</p>
                                           
                                        </td>
                                        <td>

                                        <p className="mb-1" style={{color:"#07090b"}}>{cour.niveau}</p>
                                           
                                        </td>
                                        <td>
                                        <p className="mb-1" style={{color:"#07090b"}}>{cour.description}</p>
                                            
                                        </td>
                                       
                                       
                                        <td>
                                            <UpdateCours user={user} />
                                           
                                           <button className='btn3  col rounded' data-bs-toggle="modal" data-bs-target="#coursModal"onClick={e=> setUser(cour)} ><GrDocumentUpdate/></button>
                                        </td>
                                        <td>
                                            <button 
                                                type="button"
                                                className="btn1 rounded" 
                                                
                                            >
                                                <BiArchiveIn/>
                                            </button>
                                        </td> 
                                        {/* <td>
                                        <button 
                                             style={{
                                                backgroundColor:"red", 
                                                color:"#fff",
                                                fontSize:"16px",
                                                fontWeight:"bolder"
                                            }}
                                        className='btn btn-danger col' 
                                        onClick={e=> deleteUser(user.id)}><MdDelete/></button>
                                        </td> */}
                                       
                                    </tr>
                              
                                    )
                                
                                }) }
                                {/* {

                                    user && <Update user={user} />
                                }         */}
                                </tbody>
                            </table>
            
        </div>
    )
}

export default ListerCour;
