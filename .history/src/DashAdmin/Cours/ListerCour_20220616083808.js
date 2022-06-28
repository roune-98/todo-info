import React from 'react'

import {GrDocumentUpdate} from 'react-icons/gr'
import UpdateCours from './UpdateCours'
import './CardCours.css' 

import { BiArchiveIn ,BiMessageAltDetail} from 'react-icons/bi'

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
                                    usersList.map((user,index)=>{
<<<<<<< HEAD
                                        //  if(user.archive === false){
=======
                                       // if(user.archive === false){
>>>>>>> 395191a1ec2e7c9d269ade03eaa9349d2b90145f
                                       
                                        return(
                                           
                                    <tr key={index}>
                                        <td>

<<<<<<< HEAD
                                        <p className="mb-1" style={{color:"rgb(9, 169, 86)", fontSize:"16px", fontWeight:"bolder",}}>{user.titre}</p>
=======
                                        <p className="mb-1" style={{color:"#07090b"}}>{user.titre}</p>
>>>>>>> 395191a1ec2e7c9d269ade03eaa9349d2b90145f
                                           
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
<<<<<<< HEAD
                                            
                                        <UpdateCours user={user} />
=======
                                            <UpdateCours user={user} />
                                           
>>>>>>> 395191a1ec2e7c9d269ade03eaa9349d2b90145f
                                           <button className='btn3  col rounded' data-bs-toggle="modal" data-bs-target="#coursModal"onClick={e=> setUser(user)} ><GrDocumentUpdate/></button>
                                        </td>
                                        <td>
                                            <button 
                                                type="button"
                                                className="btn1 rounded" 
<<<<<<< HEAD
                                                 onClick={e=>archiveCours(user)}
=======
                                                onClick={e=>archiveCours(user)}
>>>>>>> 395191a1ec2e7c9d269ade03eaa9349d2b90145f
                                                
                                            >
                                                <BiArchiveIn/>
                                            </button>
                                        </td> 
                                       
                                    </tr>
                              
                                    )
<<<<<<< HEAD
                                        //  }
                                       
=======
                                       // }
>>>>>>> 395191a1ec2e7c9d269ade03eaa9349d2b90145f
                                
                                }) }
                                
                                
                                </tbody>
                            </table>
            
        </div>
    )
}

export default ListerCour;
