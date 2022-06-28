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
        <>
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

                      <form className=" mt-7 w-100" onSubmit={e=>updateUser(e)} >

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
                            

                          

                              <div className="d-flex justify-content-center mx-4 mb-2 mb-lg-4">
                                <button type="submit" className="btn btn-primary btn-block mb-4 form-control" style={{borderRaduis:"10px;", backgroundColor:"#002639",border:"none"}}>Update</button>
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
   
        </>
    );
};

export default Update;