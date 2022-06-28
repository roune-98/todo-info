import React from 'react'
import {GrDocumentUpdate} from 'react-icons/gr'
import {MdDelete} from 'react-icons/md'
import {BiMessageAltDetail, BiArchiveIn} from 'react-icons/bi'
 //import profil from '../../'
 import{useEffect, useState} from 'react';
 import UpdateAprend from './UpdateAprend';
 import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
 import { db } from '../../firebase-config';
 import '../../Outils/liste.css'

const ListeApprenent = () => {
    const [user,setUser] = useState({nom:"",prenom:"",tel:"",mail:""})
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
    // const deleteUser = (id)=>{
    //     deleteDoc(doc(db,"Apprenents",id))
    // }
    return (
        <div className='container'>
           
           <table className="table align-middle mb-0 bg-white mt-5 ">
                                <thead >
                                    <tr>
                                    <th>Nom</th>
                                    <th>prenom</th>
                                    <th>Telephone</th>
                                    <th>Email</th>
                                    <th colSpan={3}>Action</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    usersList.map((appr,index)=>{
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
                                           
                                           <button className='btns rounded border-0 col' data-bs-toggle="modal" data-bs-target="#biModal"onClick={e=> setUser(appr)} ><GrDocumentUpdate/></button>
                                           <button 
                                                type="button"
                                                className="btn1 rounded" 
                                               
                                            >
                                                <BiArchiveIn/>
                                            </button>
                                        </td>
                                        <td>
                                            
                                        </td> 
                                       
                                       
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

export default ListeApprenent;