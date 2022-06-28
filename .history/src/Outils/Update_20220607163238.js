import React, { useEffect } from 'react';
import { useState } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

const Update = (props) => {
    
    const [nom,setNom] = useState()
    const [prenom,setPrenom] = useState()
    const [tel,setTel] = useState()

    useEffect(()=>{
        setNom(props.user.name)
        setPrenom(props.user.prenom)
        setTel(props.user.tel)
    },[])
    const updateUser = (e)=>{
        // pour empecher que la page se raffrechie automatiquement
        e.preventDefault()
        // setDoc(doc(db,"users","defaultuser"),{name})
        let user = {
        nom,
        prenom,
        tel
        }
        
        setDoc(doc(db,"professeurs",props.user.id),user)
    }
    return (
        <div>
            <form className='row' onSubmit={e=>updateUser(e)}>
            <div className=" row d-flex flex-row align-items-center mb-2" >
                    <div
                      <input type="text" id="nom" name='nom'
                             className="form-control col-12 my-3" placeholder='votre Nom :'
                              style={{borderRadius:"10px"}}
                              value={nom}
                              onChange={e=>setNom(e.target.value)}/>
                     
                  
                   

                
                    {/*formulaire prénom*/}
                    
                      <input type="text" id="prenom"
                             name="prenom" className="form-control col-12 my-3" 
                             placeholder=' votre Prénom :'style={{borderRadius:"10px"}}
                             value={prenom}
                             onChange={e=>setPrenom(e.target.value)}
                       />
                   
                  
				         \
                    {/*formulaire téléphone*/} 
                   
                      <input type="text" id="telephone"
                             className="form-control col-12 my-3" placeholder='votre Téléphone :'
                             style={{borderRadius:"10px"}} value={tel}
                             onChange={e=>setTel(e.target.value)}
                        />
                     
                  
                    <button className='btn btn-success'> Update</button>
                  </div>
            </form>
            
        </div>
    );
};

export default Update;