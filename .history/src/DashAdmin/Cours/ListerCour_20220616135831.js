import React from 'react'

import {GrDocumentUpdate} from 'react-icons/gr'
import UpdateCours from './UpdateCours'
import './CardCours.css' 

import { BiArchiveIn ,BiMessageAltDetail} from 'react-icons/bi'
import '../../Outils/liste.css'
 import{useEffect, useState} from 'react'
 import { collection, deleteDoc, doc, onSnapshot,setDoc } from 'firebase/firestore';
 import { db } from '../../firebase-config';

const ListerCour = () => {
    const  [user,setUser] = useState({titre:"",description:"", categorie:"", niveau:""})
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
                                <thead >
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
                                    usersList.map((user,index)=>{
                                       // if(user.archive === false){
                                       
                                        return(
                                           
                                    <tr key={index}>
                                        <td>

                                        <p className="mb-1 p1" style={{color:"#07090b"}}>{user.titre}</p>
                                           
                                        </td>
                                        <td>

                                        <p className="mb-1" style={{color:"#07090b"}}>{user.categorie}</p>
                                           
                                        </td>
                                        <td>

                                        <p className="mb-1" style={{color:"#07090b"}}>{user.niveau}</p>
                                           
                                        </td>
                                        <td>
                                        <p className="mb-1" style={{color:"#07090b"}}>{user.description}</p>
                                            
                                        </td>
                                       
                                       
                                        <td>
                                            <UpdateCours user={user} />
                                           
                                           <button className='btn3  col rounded' data-bs-toggle="modal" data-bs-target="#coursModal"onClick={e=> setUser(user)} ><GrDocumentUpdate/></button>
                                        </td>
                                        <td>
                                            <button 
                                                type="button"
                                                className="btn1 rounded" 
                                                onClick={e=>archiveCours(user)}
                                                
                                            >
                                                <BiArchiveIn/>
                                            </button>
                                        </td> 
                                       
                                    </tr>
                              
                                    )
                                       // }
                                
                                }) }
                                
                                
                                </tbody>
                            </table>
            
        </div>
    )
}

export default ListerCour;
