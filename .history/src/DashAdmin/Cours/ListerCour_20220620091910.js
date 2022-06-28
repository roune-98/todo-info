import React from 'react'
import {FaPencilAlt} from 'react-icons/fa'
import UpdateCours from './UpdateCours'
import './CardCours.css' 
import { MdDeleteForever ,} from 'react-icons/md'
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
    
     
     const archiveCours = (cour)=>{
        cour.archive = true;
        setDoc(doc(db,"cours",cour.id),cour)
        alert(" 1 cour Archiver")
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
                                    usersList.map((cour,index)=>{
                                        if(cour.archive === false){
                                       
                                        return(
                                           
                                    <tr key={index}>
                                        <td>

                                        <p className="mb-1 p1" >{cour.titre}</p>
                                       
                                           
                                        </td>
                                        <td>

                                        <p className="mb-1 p2" >{cour.categorie}</p>
                                       
                                           
                                        </td>
                                        <td>

                                        <p className="mb-1 p2" >{cour.niveau}</p>
                                           
                                        </td>
                                        
                                        <td>
<<<<<<< HEAD
                                        <p className="mb-1 p2" >{cour.description}</p>
                                        
                                           
                                        </td>
                                        
=======
                                        
                                        <p className="mb-1 p2" >{cour.niveau}</p>
                                           
                                        </td>
                                        <td>
                                        <p className="mb-1 p2" >{cour.description}</p>
                                            
                                        </td>
>>>>>>> dd68fd9b5d686c9f58b7c2a124e8c2922a58d62a
                                       
                                       
                                        <td>
                                            <UpdateCours user={user} />
                                           
                                           <button className='btn3  col rounded' data-bs-toggle="modal" data-bs-target="#coursModal"onClick={e=> setUser(user)} ><FaPencilAlt/></button>
                                        </td>
                                        <td>
                                            <button 
                                                type="button"
                                                className="btn1 rounded" 
                                                onClick={e=>archiveCours(cour)}
                                                
                                            >
                                                <MdDeleteForever/>
                                            </button>
                                        </td> 
                                       
                                    </tr>
                              
                                    )
                                       }
                                
                                }) }
                                
                                
                                </tbody>
                            </table>
            
        </div>
    )
}

export default ListerCour;
