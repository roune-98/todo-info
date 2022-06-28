import React from 'react'
import UpdateProf from './UpdateProf';
import {GrDocumentUpdate} from 'react-icons/gr'
import {MdDelete} from 'react-icons/md'
import '../../Outils/liste.css'

import {BiMessageAltDetail, BiArchiveIn} from 'react-icons/bi'
 //import profil from '../../'
 import{useEffect, useState} from 'react'
 import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
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

    
  
    const deleteUser = (id)=>{
        deleteDoc(doc(db,"professeurs",id))
    }

   

       
    return (
        <div className='container-fluid '>
           
                             <table className="table align-middle mb-0 bg-white mt-5 ">
                                <thead style={{color:"#fff", backgroundColor:"#002639"}}>
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
                                    usersList.map((prof,index)=>{
                                        return(
                                          
                                              
                                    <tr key={index}>
                                        <td>

                                        <p className="mb-1 p1" style={{color:"rgb(9, 169, 86)", fontSize:"16px", fontWeight:"bolder",}}>{prof.nom}</p>
                                             
                                        </td>
                                        <td>
                                        <p className="mb-1 p2" style={{color:"#07090b"}}>{prof.prenom}</p>
                                            
                                        </td>
                                        <td>
                                            <p className="mb-1 p2" style={{color:"#07090b"}}>{prof.tel}</p>
                                        </td>
                                        <td>
                                            <p className="mb-1 p2" style={{color:"#07090b"}}>{prof.mail}</p>
                                        </td>
                                                              
                                       
                                        <td>
                                        
                                             <UpdateProf user={user} />
                                           
                                        <button className=' btns border-0 text-info rounded' type='button'  
                                                    
                                                   
                                                data-bs-toggle="modal" data-bs-target="#samaModal"onClick={e=> setUser(prof)} ><GrDocumentUpdate/></button>
                                     
                                        </td>
                                        <td>
                                            <button 
                                                type="button"
                                                className="btn1 rounded" 
                                                
                                            >
                                                <BiArchiveIn  />
                                            </button>
                                        </td> 
                                        
                                       
                                    </tr>
                              
                                   
                                
    )}
                                     
                                    }
                                </tbody>

                            </table>
                            

                 
            
        </div>
    )
}

export default ListeProf;