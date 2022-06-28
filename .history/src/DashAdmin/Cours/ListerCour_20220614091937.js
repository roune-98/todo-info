import React from 'react'
import Update from '../../Outils/Update';
import {GrDocumentUpdate} from 'react-icons/gr'
import { Link, Route } from 'react-router-dom'
import card from "./card.jpg"


import { BiArchiveIn } from 'react-icons/bi'
 //import rCouril from '../ail,../'
 import{useEffect, useState} from 'react'
 import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
 import { db } from '../../firebase-config';

const ListerCour = () => {
    const [user,setUser] = useState(null)
     const [usersList,setUserList] = useState([])
    
    useEffect(()=>{
        onSnapshot(collection(db,"cours"),
        (snapshot)=>{
            setUserList(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
                console.log(user);
                return user
            }))
        })
        
    },[])
    const deleteUser = (id)=>{
        deleteDoc(doc(db,"cours",id))
    }
    return (
        <div className='container my-5' id='dr'>

            <div className='row justify-content-center '>
            <div className='col col-md-4 '>
        <div className="card" style={{width: "18rem;", borderRadius:"15px 15px 15px 15px",}}>
          <Link to="">
            <img src={card} className="card-img-top" alt="Sunset Over the Sea"/>
          </Link>
           <div className="card-body " 
              style={{backgroundColor:"#002639",
                     borderRadius:"0px 0px 15px 15px" }}
                    >
                         <button 
                                                type="button"
                                                className="btn " 
                                                style={{
                                                    backgroundColor:"#591945", 
                                                    color:"#fff",
                                                    fontSize:"16px",
                                                    fontWeight:"bolder",
                                                    width:'80px'
                                                }}
                                            >
                                                <BiArchiveIn/>
                                            </button>
                         <button className='btn btn-warning w-' onClick={e=>setUser(user)}><GrDocumentUpdate/></button>
                         <table className="table align-middle mb-0 bg-white mt-5 ">
                                <thead style={{color:"#fff", backgroundColor:"#002639"}}>
                                    <tr>
                                    <th>Titre</th>
                                    <th>Description</th>
                            
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    usersList.map((user,index)=>{
                                        return(
                                           
                                    <tr key={index}>
                                        <td>

                                        <p className="mb-1" style={{color:"#07090b"}}>{user.titre}</p>
                                             
                                        </td>
                                        <td>
                                        <p className="mb-1" style={{color:"#07090b"}}>{user.description}</p>
                                            
                                        </td>
                                        
                                       
                                    </tr>
                              
                                    )
                                
                                }) };
                                {/* {

                                    user && <Update user={user} />
                                }        */}
                                </tbody>
                            </table>
                 
                   
            </div>
       </div>
                        
      </div>
            </div>
           
                            
            
        </div>
    )
}

export default ListerCour;
