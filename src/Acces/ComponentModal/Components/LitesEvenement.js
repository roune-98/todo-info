import React from 'react'
import {GrDocumentUpdate} from 'react-icons/gr'
import {BiArchiveIn} from "react-icons/bi"
 import{useEffect, useState} from 'react';
 import '../../../Outils/liste.css'
 import { collection,  doc, setDoc, onSnapshot } from 'firebase/firestore';
 import { db } from '../../../firebase-config';



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
    const archiveEven = (calend) =>{
        calend.evenArchivid = true;
        setDoc(doc(db,"evenement",calend.id),calend);
    }
  return (

    <div className='container'>
           
    <table className="table align-middle mb-0 bg-white mt-5 ">
                         <thead >
                             <tr>
                             <th>title</th>
                             <th>Date</th>
                             
                             
                            
                             </tr>
                         </thead>
                         <tbody>
                         {
                             eventList.map((calend,index)=>{
                                 if(calend.evenArchivid === false){
                                    return(
                                    
                                        <tr key={index}>
                                            <td>
           
                                            <p className="mb-1 p1" 
                                                           >{calend.title}</p>
                                               
                                            </td>
                                            <td>
                                            <p className="mb-1 p2" >{calend.date}</p>
                                                
                                            </td>
                                            
                                        
                                            
                                            
                                           
                                        </tr>
                                  
                                        )
                                 }
                                 
                         
                         }) }
                        
                         </tbody>
                     </table>
    </div>
     
  )
}

export default LitesEvenement;