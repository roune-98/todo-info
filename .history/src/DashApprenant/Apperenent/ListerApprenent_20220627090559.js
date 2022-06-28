import React from 'react'
import '../../Outils/liste.css';
 import{useEffect, useState} from 'react';
 
 import { collection,  doc, onSnapshot, setDoc } from 'firebase/firestore';
 import { db } from '../../firebase-config';
 import swal from "sweetalert"

const ListeApprenent = () => {
    const [user,setUser] = useState({nom:"",prenom:"",tel:"",mail:""})
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