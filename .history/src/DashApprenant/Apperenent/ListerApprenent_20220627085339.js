import React from 'react'
import {FaPencilAlt} from 'react-icons/fa'
import '../../Outils/liste';
import {MdDeleteForever} from 'react-icons/md'
 //import profil from '../../'
 import{useEffect, useState} from 'react';
 import UpdateAprend from './UpdateAprend';
 import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
 import { db } from '../../firebase-config';
 import swal from "sweetalert"

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
         const archivid =(appr) =>{
                appr.archivage = true;
                setDoc(doc(db,"Apprenents",appr.id),appr);
                swal(" 1 Apprenant Archivée", "Clique sur OK", "success");
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