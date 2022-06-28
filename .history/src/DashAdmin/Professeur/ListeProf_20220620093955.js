import React from 'react'
import UpdateProf from './UpdateProf';
import {FaPencilAlt} from 'react-icons/fa';
import {MdDeleteForever} from 'react-icons/md';
import '../../Outils/liste.css'

import {BiMessageAltDetail, BiArchiveIn} from 'react-icons/bi'
 //import profil from '../../'
 import{useEffect, useState} from 'react'
 import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
 import { db } from '../../firebase-config';

const ListeProf = () => {
    const [user,setUser] = useState({nom:"",prenom:"",tel:"", mail:""})
    
     const [usersList,setUserList] = useState([])
    useEffect(()=>{
        onSnapshot(collection(db,"professeurs"),
        (snapshot)=>{
            setUserList(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
                // console.log("gggggggggggggggggggguser", user);
                return user
            }))
        })
        
    },[])

    
  
<<<<<<< HEAD
    
=======
   const archivedProf = (prof)=>{
        prof.archived = true;
        setDoc(doc(db,"professeurs",prof.id),prof)
        alert("1 Professeur Archivé")
    }
>>>>>>> dd68fd9b5d686c9f58b7c2a124e8c2922a58d62a

 

       
    return (
        <div className='container-fluid '>
           
                             <table className="table align-middle mb-0 bg-white mt-5 ">
                                <thead>
                                    <tr>
                                    <th>Nom</th>
                                    <th>prenom</th>
                                    <th>Telephone</th>
                                    <th>Email</th>
                                    <th>details</th>
                                    <th>Update</th>
                                    <th>Archive</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    usersList.map((prof,index)=>{
                                       if(prof.archived === false){
                                            return(
                                          
                                              
                                                <tr key={index}>
                                                    <td>
            
                                                    <p className="mb-1" style={{color:"#07090b"}}>{prof.nom}</p>
                                                         
                                                    </td>
                                                    <td>
                                                    <p className="mb-1" style={{color:"#07090b"}}>{prof.prenom}</p>
                                                        
                                                    </td>
                                                    <td>
                                                        <p className="mb-1" style={{color:"#07090b"}}>{prof.tel}</p>
                                                    </td>
                                                    <td>
                                                        <p className="mb-1" style={{color:"#07090b"}}>{prof.mail}</p>
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
                                                    
                                                                 <UpdateProf user={user} />
                                                       
                                                    <button className='btn btn-warning col' data-bs-toggle="modal" data-bs-target="#samaModal"onClick={e=> setUser(prof)} ><GrDocumentUpdate/></button>
                                                 
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
                                                            <BiArchiveIn onClick={e=>archivedProf(prof)} />
                                                        </button>
                                                    </td>  
                                                </tr>                       
                                            )
                                       }

                                       
                            })}
                    </tbody>
            </table>
        </div>
    )
}

export default ListeProf;