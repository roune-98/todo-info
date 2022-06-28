import React from 'react'
import {GrDocumentUpdate} from 'react-icons/gr'
import {BiMessageAltDetail, BiArchiveIn} from 'react-icons/bi'
 import{useEffect, useState} from 'react';
 import '../../Outils/liste.css'
 import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
 import { db } from '../../firebase-config';


const LitesEvenement =()=> {
    const [event,setEvent] = useState({title:"",date:""})
     const [eventList,setEventList] = useState([])
    useEffect(()=>{
        onSnapshot(collection(db,"evenement"),
        (snapshot)=>{
            setEventList(snapshot.docs.map((snap)=>{
                let event = {...snap.data(),id:snap.id}
             
                return event
            }))
        })
        
    },[])
  return (

    <div className='container'>
           
    <table className="table align-middle mb-0 bg-white mt-5 ">
                         <thead >
                             <tr>
                             <th>title</th>
                             <th>Date</th>
                             <th>Update</th>
                            
                             </tr>
                         </thead>
                         <tbody>
                         {
                             eventList.map((calend,index)=>{
                                 return(
                                    
                             <tr key={index}>
                                 <td>

                                 <p className="mb-1" style={{color:"rgb(9, 169, 86)", fontSize:"16px",
                                                 fontWeight:"bolder",}}>{calend.title}</p>
                                    
                                 </td>
                                 <td>
                                 <p className="mb-1" style={{color:"#07090b"}}>{calend.date}</p>
                                     
                                 </td>
                                 
                                 <td>
                                    
                                    
                                    <button className='btn btn-warning col' data-bs-toggle="modal" data-bs-target="#biModal"onClick={e=> setEvent(calend)} ><GrDocumentUpdate/></button>
                                 </td>
                                 
                                
                             </tr>
                       
                             )
                         
                         }) }
                        
                         </tbody>
                     </table>
    </div>
     
  )
}

export default LitesEvenement;