import React from 'react'
import { useState ,useContext, useRef, } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import {UserContext} from './UserContext';
import { useNavigate } from 'react-router-dom';
import {db} from '../firebase-config'

const SignUp =()=> {
    const [nom,setNom] = useState()
    const [prenom,setPrenom] = useState()
    const [tel,setTel] = useState()
    // AuthentificATION
    const {email,
      password,
      setPassword,
      setEmail,
      emailEror,
      passwordEror,
      handleLogIn,
      handleSinUp,
      hasAcount,
      setHasAcount}=props;


    const ajoutContenu = (e)=>{
        e.preventDefault()
        // setDoc(doc(db,"users","defaultuser"),{name})
        let user = {
        nom,
        prenom,
        tel
        }
        .then((useCreatBe) =>{
          const user= useCreatBe.user
          db.collection('professeurs').add({
            nom:user.displayName,
           prenom:user.prenom,
           tel:user.tel,
            userId:user.uid
          })
          console.log(user)
        })

        addDoc(collection(db,"professeurs"),user)
        // .then(()=>{

        // })
        // .catch(console.log())
    }
    // les logique de l'authentification

   
  return (
    <>
     
        
        <button type="button" class="rounded" data-bs-toggle="modal" data-bs-target="#myModal" style={{color:"#fff", backgroundColor:"#002639",fontWeight:"bolder",fontSize:"20px"}}>
          Ajouter
        </button>
        {modalState.signUpModal &&(
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
                  
                    
                      <div className="row justify-content-center">
                        {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1 ">
                          <img src={logo} alt="logo" className="img-fluid " />
                        </div> */}
                        <div className="col-md-10   order-2 order-lg-2">

                          {/* <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">S'inscrire</p> */}

                      <form className=" mt-7 w-100" onSubmit={e=>ajoutContenu(e)} ref={formRef}>

                            <div className="d-flex flex-row align-items-center mb-2" >
                              
                              <div className="form-outline flex-fill mb-2 ">
                                <input type="text" id="nom" name='nom'
                                      className="form-control" placeholder='votre Nom :'
                                        style={{borderRadius:"10px"}}
                                        value={nom}
                                        onChange={e=>setNom(e.target.value)}/>
                                
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-2">
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
                            </div>
                            <div className="d-flex flex-row align-items-center mb-2">
                              {/*formulaire email*/}
                              <div className="form-outline flex-fill mb-3">
                                <input type="email" 
                                      id="email"
                                      name='email' 
                                      value={email}
                                      onChange={e=>setEmail(e.target.value)}
                                      className="form-control" 
                                      placeholder='votre E-mail :'style={{borderRadius:"10px"}}
                                />
                              
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-2">
                              {/*mot passe*/}
                              <div className="form-outline flex-fill mb-3">
                                  <input type="password" 
                                  onChange={e=>setEmail(e.target.value)}
                                  val
                                        id="pass"
                                        name='pass' 
                                        className="form-control" 
                                        placeholder='votre Mot passe :' 
                                        style={{borderRadius:"10px"}} 
                                    />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-2">
                              {/*confirmer mot passe*/}
                              <div className="form-outline flex-fill mb-3">
                                <input type="password" id="sw"
                                        name='psw'
                                        className="form-control" 
                                        placeholder='confirmer Mot passe :' 
                                        style={{borderRadius:"10px"}}
                                  />
                                
                              </div>
                            </div>

                          

                              <div className="d-flex justify-content-center mx-4 mb-2 mb-lg-4">
                                <button type="submit" className="btn btn-primary btn-block mb-4 form-control" style={{borderRaduis:"10px;", backgroundColor:"#002639",border:"none"}}>Submit</button>
                              </div>

                          </form>

                        </div>
                        
                      </div>
                    
                  
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
     )}
     
 </>
  )
}

export default SignUp