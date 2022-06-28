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
                console.log(user);
                return user
            }))
        })
        
    },[])
         const archivid =(appr) =>{
                appr.archivage = true;
                setDoc(doc(db,"Apprenents",appr.id),appr);
                alert("1  Archivé")
         }
    return (
        <div className='container'>
           
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
                                    usersList.map((appr,index)=>{
                                        if(appr.archivage === false){
                                            return(
                                           
                                            <tr key={index}>
                                                <td>
                                                <p className="mb-1 p1" >{appr.nom}</p>
                                                </td>
                                                <td>
                                                <p className="mb-1 p2" >{appr.prenom}</p>
                                                    
                                                </td>
                                                <td>
                                                    <p className="mb-1 p2" >{appr.tel}</p>
                                                </td>
                                                <td>
                                                    <p className="mb-1 p2" >{appr.mail}</p>
                                                </td>
                                            
                                                <td>
                                                    <UpdateAprend user={user} />
                                                
                                                <button className='btns rounded border-0 col' data-bs-toggle="modal" data-bs-target="#biModal"onClick={e=> setUser(appr)} ><FaPencilAlt/></button>
                                                </td>
                                                <td>
                                                    <button 
                                                        type="button"
                                                        className="btn1 rounded" 
                                                    
                                                    >
                                                        <MdDeleteForever onClick={e=>archivid(appr)}/>
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