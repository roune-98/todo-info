import React, { useEffect } from 'react';
import { useState } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../fire';

const Update = (props) => {
    
    const [name,setName] = useState()
    const [phone,setPhone] = useState()

    useEffect(()=>{
        setName(props.user.name)
        setPhone(props.user.phone)
    },[])
    const updateUser = (e)=>{
        // pour empecher que la page se raffrechie automatiquement
        e.preventDefault()
        // setDoc(doc(db,"users","defaultuser"),{name})
        let user = {
        name:name,
        phone:phone
        }
        
        setDoc(doc(db,"users",props.user.id),user)
    }
    return (
        <div>
            <form className='row' onSubmit={e=>updateUser(e)}>
            <div className='row' >
                <div className='col' >
                <input className='col-12 my-3' type={"text"} value={name} onChange={e=>setName(e.target.value)} ></input>
                <input className='col-12 my-3' type={"number"} value={phone} onChange={e=>setPhone(e.target.value)} ></input>
                <button type='submit' className='btn btn-success' >Mise ajour</button>
                </div>
                <div className='col' ></div>
            </div>
            </form>
            
        </div>
    );
};

export default Update;