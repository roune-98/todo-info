import React, {useState, useEffect} from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import frLocale  from "@fullcalendar/core/locales/fr"
import {query, onSnapshot, collection} from 'firebase/firestore';
import { db } from '../firebase-config'
import Modal from './ComponentModal/Modal';
import './Calendar.css';
import UseModal from './ComponentModal/UseModal'


function EventCalendar() {

  const {isShowing, toggle} = UseModal()
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
  }

  return (
    <div className="container row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light col-lg-12 m-3" >
          <div className="container my-0">
            <a 
              className="navbar-brand" 
              href="#" 
              style={{
                color:'#ec5251',
                fontSize:'30px',
                fontWeight:'bolder'
              }}
            >
              Evénements Scolaire
            </a>
          </div>
        </nav>
        <Modal />

      <div className='col-lg-12 m-2' style={{position:'relative', right:'45px'}}>
        <FullCalendar 
          events={data}
          plugins = {[ dayGridPlugin, interactionPlugin]} 
          dateClick={handleClick}
          locales={frLocale }
          locale='fr'
      
        />
      </div>
    
    </div>
  )
}

export default EventCalendar