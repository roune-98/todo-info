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
            <div className="d-flex flex-row align-items-center mb-2" >
                    
                      <input type="text" id="nom" name='nom'
                             className="form-control" placeholder='votre Nom :'
                              style={{borderRadius:"10px"}}
                              value={nom}
                              onChange={e=>setNom(e.target.value)}/>
                     
                  
                   

                
                    {/*formulaire prénom*/}
                    <div className="form-outline flex-fill mb-3">
                      <input type="text" id="prenom"
                             name="prenom" className="form-control" 
                             placeholder=' votre Prénom :'style={{borderRadius:"10px"}}
                             value={prenom}
                             onChange={e=>setPrenom(e.target.value)}
                       />
                    </div>
                  </div>
				          <div className="d-flex flex-row align-items-center mb-2">
                    {/*formulaire téléphone*/} 
                    <div className="form-outline flex-fill mb-3">
                      <input type="text" id="telephone"
                             className="form-control" placeholder='votre Téléphone :'
                             style={{borderRadius:"10px"}} value={tel}
                             onChange={e=>setTel(e.target.value)}
                        />
                     
                    </div>
                    <button className='btn btn-success'> Update</button>
                  </div>
            </form>
            
        </div>
    );
};

export default Update;