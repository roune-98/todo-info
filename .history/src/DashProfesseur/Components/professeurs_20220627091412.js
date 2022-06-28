import React from 'react';
import '../../Outils/liste.css'
 import{useEffect, useState} from 'react'
 import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
 import { db } from '../../firebase-config';

const Professeurs = () => {
    const [user,setUser] = useState({nom:"",prenom:"",tel:"",mail:""})
    
     const [usersList,setUserList] = useState([])
    useEffect(()=>{
        onSnapshot(collection(db,"professeurs"),
        (snapshot)=>{
            setUserList(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
               
                return user
            }))
        })
        
    },[])

    
  
    const deleteUser = (id)=>{
        deleteDoc(doc(db,"professeurs",id))
    }
    return (
        <div className='container'>
           
                             <table className="table align-middle mb-0 bg-white mt-5 ">
                                    {/* <caption style={{color:"#fff", backgroundColor:"#002639"}} >Mes clients</caption> */}
                                <thead >
                                    <tr>
                                    <th>Nom</th>
                                    <th>prenom</th>
                                    <th>Telephone</th>
                                    <th>Email</th>
                                   
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    usersList.map((prof,index)=>{
                                        return(
                                          
                                              
                                    <tr key={index}>
                                        <td>

                                        <p className="mb-1 p1">{prof.nom}</p>
                                             
                                        </td>
                                        <td>
                                        <p className="mb-1 p2" >{prof.prenom}</p>
                                            
                                        </td>
                                        <td>
                                            <p className="mb-1 p2" >{prof.tel}</p>
                                        </td>
                                        <td>
                                        <p className="mb-1 p2">{prof.mail}</p>
                                        </td>
                                        
                                       
                                    </tr>
                              
                                   
                                
    )}) 
                                     
                                    }
                                </tbody>

                            </table>
                            

                 
            
        </div>
    )
}

export default MesProf;