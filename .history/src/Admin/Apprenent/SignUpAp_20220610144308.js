import React from 'react'
import { useState ,useContext, useRef, } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
// import {UserContext} from './UserContext';
import { useNavigate } from 'react-router-dom';
import {db} from '../../firebase-config'

const SignUpAp =()=> {
    const [nom,setNom] = useState()
    const [prenom,setPrenom] = useState()
    const [tel,setTel] = useState()
    const [email,setEmail] = useState()
    // AuthentificATION
    

    const ajoutContenu = (e)=>{
        e.preventDefault()
        // setDoc(doc(db,"users","defaultuser"),{name})
        let user = {
        nom,
        prenom,
        tel,
        email
        }
        addDoc(collection(db,"Apprenents"),user)
        // .then(()=>{

        // })
        // .catch(console.log())
    }
    // les logique de l'authentification

   
  return (
    <div>
        
  <button type="button" class="shadow-lg p-2   rounded" data-bs-toggle="modal" data-bs-target="#myModal" style={{color:"#fff", backgroundColor:"#002639",fontWeight:"bolder",fontSize:"20px"}}>
    Ajouter
  </button>
        <div class="modal mt-5" id="myModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content w-100">

      {/* <!-- Modal Header --> */}
      <div class="modal-header">
         <h4 class="modal-title">S'inscrire</h4> 
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

 
      <div class="modal-body">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                
              
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal footer --> */}
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default SignUpAp