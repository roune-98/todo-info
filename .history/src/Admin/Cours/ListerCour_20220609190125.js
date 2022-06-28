import React from 'react'
<<<<<<< HEAD
import Update from '../../Outils/Update';
import {GrUpdate} from 'react-icons/gr'


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
        <div className='container'>
           
                             <table className="table align-middle mb-0 bg-white mt-5 ">
                                <thead style={{color:"#fff", backgroundColor:"#002639"}}>
                                    <tr>
                                    <th>Titre</th>
                                    <th>Description</th>
                                    <th>update</th>
                                    <th>Archive</th>
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
                                        
                                      
                                        <td>
                                        <button className='btn btn-warning col' onClick={e=>setUser(user)}><GrUpdate/></button>
                                        </td>
                                        <td>
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
                                
                                }) };
                                {/* {

                                    user && <Update user={user} />
                                }        */}
                                </tbody>
                            </table>
                 
            
        </div>
    )
}

export default ListerCour;
=======
import startupPhotos from "./programe.jpg";
import "./ListCour.css";


function ListerCour() {
  return (
    <>
		
    <div className="container my-5" >
          <div className="row ms-5">
              <div id="col" className="col-md-3 col-sm-6">
                  <div className="card card-block">
                      <h4 className="card-title text-right"></h4>
                      <img src={startupPhotos} alt="" className='vh-50' />
                      <h3 className="card-title mt-3 mb-3">programmation</h3>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia quasi </p> 
                      <a href="" className="btn btn-outline-success btn-sm">Details</a>
                  </div>
              </div>
          </div>
      </div>
      
      
    </>
  
  )
}

export default ListerCour
>>>>>>> 525ef959a3c20e5e674bf6cb1389eea7d3de37f1
