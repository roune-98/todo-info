import React from 'react'
import Update from '../..'
import {GrUpdate} from 'react-icons/gr'
import {MdDelete} from 'react-icons/md'

import {BiMessageAltDetail, BiArchiveIn} from 'react-icons/bi'
 //import profil from '../../'
 import{useEffect, useState} from 'react';
 import { useNavigate,Routes, Route } from 'react-router-dom';
 import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
 import { db } from '../../firebase-config';


 const ShowList=({usersList})=>{

    const [user,setUser] = useState(null)
    const navigate = useNavigate()
    const Update =(user)=>{
        setUser(user)
        navigate('update')
    }
    return(
        <table className="table align-middle mb-0 bg-white mt-5 ">
        <thead style={{color:"#fff", backgroundColor:"#002639"}}>
            <tr>
            <th>Nom</th>
            <th>prenom</th>
            <th>Telephone</th>
            <th>Detail</th>
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

                <p className="mb-1" style={{color:"#07090b"}}>{user.nom}</p>
                     
                </td>
                <td>
                <p className="mb-1" style={{color:"#07090b"}}>{user.prenom}</p>
                    
                </td>
                <td>
                    <p className="mb-1" style={{color:"#07090b"}}>{user.tel}</p>
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
                <button className='btn btn-warning col' onClick={e=>Update(user)}><GrUpdate/></button>
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
            


            
        </tbody>
    </table>

    )
 }
const ListeProf = () => {
     const [usersList,setUserList] = useState([])
    
    useEffect(()=>{
        onSnapshot(collection(db,"professeurs"),
        (snapshot)=>{
            setUserList(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
                console.log(user);
                return user
            }))
        })
        
    },[])
    const deleteUser = (id)=>{
        deleteDoc(doc(db,"professeurs",id))
    }
    return (
        <div className='container'>
           <Routes>
               <Route path='' element={<ShowList usersList={usersList}/>}></Route>
               <Route path= 'update' element={<Update/>}></Route>
           </Routes>
                           
                          
        </div>
    )
}

export default ListeProf;