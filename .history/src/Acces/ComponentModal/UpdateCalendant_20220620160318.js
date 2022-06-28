import { useState,useEffect } from 'react';
import {  doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

const UpdateCalendat = (props) => {
    
    const [title,setTitle] = useState()
    const [date,setDate] = useState()
    

    useEffect(()=>{
        setTitle(props.user.title)
        setDate(props.user.date)
        
    },[props])
    const updateUser = (e)=>{
        // pour empecher que la page se raffrechie automatiquement
        e.preventDefault()
        // setDoc(doc(db,"users","defaultuser"),{name})
        let event = {
        title,
        date,
        archivage: false
        }
        
        setDoc(doc(db,"evenement",props.event.id),event)
    }
    return(
        <>


      <div className="modal" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Evénements à venir</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  <form >
                    <div className="mb-3">
                     
                      <input value={title} onChange={e=> setTitle(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Selectionner  la date de l'evenement SVP</label>
                      <input value={date} onChange={e=> setDate(e.target.value)} type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" class="btn btn-primary" onClick={UpdateCalendat}>Save changes</button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fermer</button>
                </div>
          </div>
      </div>
    </div>
        </>
    )
}
export default UpdateCalendat;