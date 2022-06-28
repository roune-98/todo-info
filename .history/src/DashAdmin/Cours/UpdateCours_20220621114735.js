
import { useState,useEffect } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import '..'
const UpdateCours = (props) => {
    
    const [titre,setTitre] = useState()
    const [description,setDescription] = useState()
    const [categorie, setCategorie] =useState()
    const[niveau, setNiveau] = useState()
    
    

    useEffect(()=>{
        setTitre(props.user.titre)
        setDescription(props.user.description)
        setCategorie(props.user.categorie)
        setNiveau(props.user.niveau)
      
    },[props])
    const updateUser = (e)=>{
        // pour empecher que la page se raffrechie automatiquement
        e.preventDefault()
        // setDoc(doc(db,"users","defaultuser"),{name})
        let user = {
        titre,
        categorie,
        niveau,
        description,
        archive: false
       
        }
        
        setDoc(doc(db,"cours",props.user.id),user)
    }
    return (
        <>
           <div class="modal mt-5" id="coursModal">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content w-100">

                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h4 class="modal-title">UpdateCours</h4> 
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

          
                <div class="modal-body">
                <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  
                    
                      <div className="row justify-content-center">
                       
                        <div className="col-md-10   order-2 order-lg-2">

                      

                      <form className=" mt-7 w-100" onSubmit={e=>updateUser(e)} >

                            <div className="d-flex flex-row align-items-center mb-2" >
                              
                              <div className="form-outline flex-fill mb-2 ">
                                <input type="text" id="titre" name='titre'
                                      className="form-control" placeholder='Titre du cours :'
                                        style={{borderRadius:"10px"}}
                                        value={titre}
                                        onChange={e=>setTitre(e.target.value)}/>
                                
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-2">
                              {/*formulaire prénom*/}
                              <div className="form-outline flex-fill mb-3">
                                <input type="text" id="categorie"
                                      name="description" className="form-control" 
                                      placeholder=' categorie'style={{borderRadius:"10px"}}
                                      value={categorie}
                                      onChange={e=>setCategorie(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-2">
                              {/*formulaire prénom*/}
                              <div className="form-outline flex-fill mb-3">
                                <input type="text" id="niveau"
                                      name="description" className="form-control" 
                                      placeholder=' niveau'style={{borderRadius:"10px"}}
                                      value={niveau}
                                      onChange={e=>setNiveau(e.target.value)}
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-2">
                              {/*formulaire prénom*/}
                              <div className="form-outline flex-fill mb-3">
                                <input type="text" id="description"
                                      name="description" className="form-control" 
                                      placeholder=' la description :'style={{borderRadius:"10px"}}
                                      value={description}
                                      onChange={e=>setDescription(e.target.value)}
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
   
        </>
    );
};

export default UpdateCours;