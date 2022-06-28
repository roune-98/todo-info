import React from 'react'
import {FaPencilAlt} from 'react-icons/fa'
import '../../Outils/liste.css';
import {MdDeleteForever} from 'react-icons/md'
 //import profil from '../../'
 import{useEffect, useState} from 'react';
 import UpdateAprend from './UpdateAprend';
 import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
 import { db } from '../../firebase-config';

const ListeApprenent = () => {
    const [user,setUser] = useState({nom:"",prenom:"",tel:"",mail:"" , archivage:false})
     const [usersList,setUserList] = useState([])
    useEffect(()=>{
        onSnapshot(collection(db,"Apprenents"),
        (snapshot)=>{
            setUserList(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
               
                return user
            }))
        })
        
    },[])
         const archivid =(u) =>{
                u.archivage = true;
                setDoc(doc(db,"Apprenents",u.id),u);
                alert("1 Apprenant Archivé")
         }
    return (
        <div className='container'>
           
           <table className="table align-middle mb-0 bg-white mt-5 ">
                                <thead >
                                    <tr>
                                    <th>Nom</th>
                                    <th>prenom</th>
                                    <th>Telephone</th>
                                    <th>Email</th>
                                    <th>update</th>
                                    <th>Archive</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    usersList.map((u,index)=>{
                                        if(u.archivage === false){
                                            return(
                                           
                                            <tr key={index}>
                                                <td>
                                                <p className="mb-1 p1" >{u.nom}</p>
                                                </td>
                                                <td>
                                                <p className="mb-1 p2" >{u.prenom}</p>
                                                    
                                                </td>
                                                <td>
                                                    <p className="mb-1 p2" >{u.tel}</p>
                                                </td>
                                                <td>
                                                    <p className="mb-1 p2" >{u.mail}</p>
                                                </td>
                                            
                                                <td>
                                                    <UpdateAprend user={user} />
                                                
                                                <button className='btns rounded border-0 col' data-bs-toggle="modal" data-bs-target="#biModal"onClick={e=> setUser(u)} ><FaPencilAlt/></button>
                                                </td>
                                                <td>
                                                    <button 
                                                        type="button"
                                                        className="btn1 rounded" 
                                                        onClick={e=>archivid(u)}
                                                    >
                                                        <MdDeleteForever />
                                                    </button>
                                                </td> 
                                            
                                       
                                    </tr>
                              
                            )
                                
                            }})
                        }

                                </tbody>
                            </table>
            
        </div>
    )
}

export default ListeApprenent;