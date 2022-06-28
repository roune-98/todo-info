import React, {useState, useEffect} from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {query, onSnapshot, addDoc, collection} from 'firebase/firestore';
import { db } from '../firebase-config'
import Modal from './ComponentModal/Modal';
import './Calendar.css';
import UseModal from './ComponentModal/UseModal'

function EventCalendar() {

  const {isShowing: isFormShowed, toggle: toggleForm} = UseModal()
  const [data, setData] = useState([]);

  useEffect(() => {
    //mounts
    const q = query(collection(db, 'evenement'));
    const unsub = onSnapshot(q, (snap) => {
      const array =snap.docs.map(doc=>{
        return doc.data()
      });
      setData([...array]);
      console.log(array)
    })
    //unmounts
    return () => {unsub()}
  }, [])


  const handleClick = () =>{
    //pour pouvoir cliquer sur le calendrier et l'afficher  
      window.document.getElementById('showModal').click()
    
    // if(e.jsEvent){
    //   const title = prompt('enter title', e.dateStr);
    //   const event = {
    //     title: title,
    //     date: title
       
    //   }
    //   addDoc(collection(db, 'evenement'), event)
    // }
  }

 
 
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#ec5251'}}>
          <div className="container ">
            <a 
              className="navbar-brand" 
              href="#" 
              style={{
                color:'#ffffff',
                fontSize:'20px',
                fontWeight:'bolder'
              }}
            >
              Evénements Scolaire
            </a>
          </div>
        </nav>
        <Modal
        />

      <div className='calendar-container p-3 m-5'>
        <FullCalendar 
          events={data}
          plugins = {[ dayGridPlugin, interactionPlugin]} 
          dateClick={handleClick}
         
        />
      </div>
    
    </div>
  )
}

export default EventCalendar