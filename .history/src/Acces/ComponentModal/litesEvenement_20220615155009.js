import React from 'react'
import {GrDocumentUpdate} from 'react-icons/gr'
import {BiMessageAltDetail, BiArchiveIn} from 'react-icons/bi'
 import{useEffect, useState} from 'react';

 import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
 import { db } from '../../firebase-config';


const litesEvenement =()=> {
    const [event,setEvent] = useState({title:"",date:""})
     const [eventList,setEventList] = useState([])
    useEffect(()=>{
        onSnapshot(collection(db,"evenement"),
        (snapshot)=>{
            setUserList(snapshot.docs.map((snap)=>{
                let user = {...snap.data(),id:snap.id}
                console.log(user);
                return event
            }))
        })
        
    },[])
  return (

    <div className='container'>
           
    <table className="table align-middle mb-0 bg-white mt-5 ">
                         <thead style={{color:"#fff", backgroundColor:"#002639"}}>
                             <tr>
                             <th>title</th>
                             <th>Date</th>
                            
                             </tr>
                         </thead>
                         <tbody>
                         {
                             usersList.map((appr,index)=>{
                                 return(
                                    
                             <tr key={index}>
                                 <td>

                                 <p className="mb-1" style={{color:"rgb(9, 169, 86)", fontSize:"16px",
                                                 fontWeight:"bolder",}}>{appr.nom}</p>
                                    
                                 </td>
                                 <td>
                                 <p className="mb-1" style={{color:"#07090b"}}>{appr.prenom}</p>
                                     
                                 </td>
                                 
                                 <td>
                                    
                                    
                                    <button className='btn btn-warning col' data-bs-toggle="modal" data-bs-target="#biModal"onClick={e=> setUser(appr)} ><GrDocumentUpdate/></button>
                                 </td>
                                 
                                
                             </tr>
                       
                             )
                         
                         }) }
                         {/* {

                             user && <Update user={user} />
                         }         */}
                         </tbody>
                     </table>
     
  )
}

export default litesEvenement