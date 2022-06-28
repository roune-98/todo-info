import React from 'react'
import {FaPencilAlt} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
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
                                    <th>Detail</th>
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
            
                                                    <p className="mb-1" style={{color:"#07090b"}}>{appr.nom}</p>
                                                       
                                                    </td>
                                                    <td>
                                                    <p className="mb-1" style={{color:"#07090b"}}>{appr.prenom}</p>
                                                        
                                                    </td>
                                                    <td>
                                                        <p className="mb-1" style={{color:"#07090b"}}>{appr.tel}</p>
                                                    </td>
                                                    <td>
                                                        <p className="mb-1" style={{color:"#07090b"}}>{appr.mail}</p>
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
                                                        <UpdateAprend user={user} />
                                                       
                                                       <button className='btn btn-warning col' data-bs-toggle="modal" data-bs-target="#biModal"onClick={e=> setUser(appr)} ><GrDocumentUpdate/></button>
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
                                                            <BiArchiveIn onClick={e=>archivid(appr)}/>
                                                        </button>
                                                    </td> 
                                                    {/* <td>
                                                    <button 
                                                         style={{
                                                            backgroundColor:"red", 
                                                            color:"#fff",
                                                            fontSize:"16px",
                                                            fontWeight:"bolder"
                                                        }}
                                                    className='btn btn-danger col' 
                                                    onClick={e=> deleteUser(user.id)}><MdDelete/></button>
                                                    </td> */}
                                                   
                                                </tr>
                                          
                                                )
                                        }
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
                                                <MdDeleteForever/>
                                            </button>
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