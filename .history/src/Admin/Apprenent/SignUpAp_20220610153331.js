import React from 'react'
import { useState ,useContext,} from 'react';
// import { Alert } from 'react-bootstrap';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
// import {UserContext} from './UserContext';
import { useNavigate,Link } from 'react-router-dom';
import {db} from '../../firebase-config'
import { UserContext } from "../../Outils/UserContext"

const SignUpAp =()=> {
  const [mail,setMail] = useState()
  const [nom,setNom] = useState()
  const [prenom,setPrenom] = useState()
  const [mpass,setMpass] = useState()
  const [confpass,setConfpass] = useState()

  const { signUp } = useContext(UserContext);
  const [error, setError] = useState("")
  const [loadingData, setLoadingData]= useState(false)
  const history = useNavigate()

  

  async function handleSubmit(e) {
      e.preventDefault()
  
      if (mpass !== confpass) {
          return setError("Passwords do not match")
      }
  
      try {
          setError("")
          setLoadingData(true)
          await signUp(mail, mpass)
          let user = {
            
            }
            addDoc(collection(db,"Apprenents"),user)

          setError('User created successfully!')
          history("/login")
      } catch {
          setError("Failed to create an account")
      }
  
      setLoadingData(false)
  }


    // const ajoutContenu = (e)=>{
    //     e.preventDefault()
    //     // setDoc(doc(db,"users","defaultuser"),{name})
       
    //     // .then(()=>{

    //     // })
    //     // .catch(console.log())
    // }
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
                
            <div className='card'>
                <div className='card-body'>
                    <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">S'inscrire</p>
                    {error}
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
                    
                    <form className=" mt-7 w-100" onSubmit={handleSubmit} >

                        <div className="d-flex flex-row align-items-center mb-2" >
                        
                        <div className="form-outline flex-fill mb-2 ">
                            <input type="text" id="nom" name='nom'
                                className="form-control" placeholder='votre Nom :'
                                style={{borderRadius:"10px"}}
                                
                                value={nom}
                                onChange={e=>setNom(e.target.value)}

                                required                               
                            />
                            
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

                                required                                
                            />
                        </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2">
                        {/*formulaire email*/}
                        <div className="form-outline flex-fill mb-3">
                            <input type="email" 
                                id="email"
                                name='email' 
                                className="form-control" 
                                placeholder='votre E-mail :'style={{borderRadius:"10px"}}

                                value={mail}
                                onChange={e=>setMail(e.target.value)}
                                
                                required
                            />
                        
                        </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                        {/*mot passe*/}
                        <div className="form-outline flex-fill mb-3">
                            <input type="password" 
                                    id="pass"
                                    name='pass' 
                                    className="form-control" 
                                    placeholder='votre Mot passe :' 
                                    style={{borderRadius:"10px"}} 
                                    
                                    value={mpass}
                                    onChange={e=>setMpass(e.target.value)}
                                    required                               
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
                                    
                                    value={confpass}
                                    onChange={e=>setconfpass(e.target.value)}
                                    required
                                />
                            
                        </div>
                        </div>



                        <div className="d-flex justify-content-center mx-4 mb-1 mb-lg-4">
                            <button disabled={loadingData} type="submit" className="btn btn-primary btn-block mb-4 form-control" style={{borderRaduis:"10px;", backgroundColor:"#002639",border:"none"}}>Submit</button>
                        </div>

                    </form>
                </div>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/login">Log In</Link>
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
    </div>
  )
}

export default SignUpAp