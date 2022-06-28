import React from 'react'
import {FaPencilAlt} from 'react-icons/fa';
 import{useEffect, useState} from 'react';
 import '../../Outils/liste.css'
 import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
 import { db } from '../../firebase-config';
import UpdateCalendat from './UpdateCalendant';


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

                                 <p className="mb-1 p1" 
                                                >{calend.title}</p>
                                    
                                 </td>
                                 <td>
                                 <p className="mb-1 p2" >{calend.date}</p>
                                     
                                 </td>
                                 
                                 <td>
                                 <UpdateCalendat event={cla} />
                                                
                                    <button className='btns rounded border-0  col' data-bs-toggle="modal" data-bs-target="#myModal"onClick={e=> setEvent(calend)} ><FaPencilAlt/></button>
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