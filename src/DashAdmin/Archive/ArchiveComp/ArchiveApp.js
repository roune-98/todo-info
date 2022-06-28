import React from 'react'
import{useEffect, useState} from 'react';
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import { BiArchiveIn} from 'react-icons/bi'
import swal from "sweetalert"

function ArchiveApp() {
	const [user,setUser] = useState({nom:"", prenom:"",tel:"",mail:"" , archivage:false})
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
	const unArchivid = (appr)=>{
        appr.archivage = false;
        setDoc(doc(db,"Apprenents",appr.id),appr)
		swal(" 1 Apprenant Desarchivé!", "Clique sur OK", "success");
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
                                    <th>Desarchivée</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    usersList.map((appr,index)=>{
                                        if(appr.archivage === true){
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
                                                                backgroundColor:"#591945", 
                                                                color:"#fff",
                                                                fontSize:"16px",
                                                                fontWeight:"bolder",
                                                                width:'60px'
                                                            }}
                                                            onClick={e=>unArchivid(appr)}
                                                        >
                                                            <BiArchiveIn  />
                                                        </button>
                                                    </td> 
                                                    
                                                   
                                                </tr>
                                          
                                                )
                                        }

                                        
                                
                                }) }
                                {/* {

                                    user && <Update user={user} />
                                }         */}
                                </tbody>
                            </table>
            
        </div>
    )
}

export default ArchiveApp