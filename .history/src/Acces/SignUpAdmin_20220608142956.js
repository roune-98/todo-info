import React, { useRef, useState } from 'react';
import { UserContext } from '../Outils/UserContext';
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const SignUpAdmin = () => {

    const nameRef = useRef()
    const firstRef = useRef()
    const emailRef = useRef()
    const mdpRef = useRef()
    const CmdpRef = useRef()
    const { signUp } = useContext(UserContext);
    const [error, setError] = useState("")
    const [loadingData, setLoadingData]= useState(false)
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (mdpRef.current.value !== CmdpRef.current.value) {
            return setError("Passwords do not match")
        }
    
        try {
            setError("")
            setLoadingData(true)
            await signUp(emailRef.current.value, mdpRef.current.value)
            history("/")
        } catch {
            setError("Failed to create an account")
        }
    
        setLoadingData(false)
    }

    return (
        <>
            <div className='card'>
                <div className='card-body'>
                    <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">S'inscrire</p>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <form className=" mt-7 w-100" onSubmit={handleSubmit} >

                        <div className="d-flex flex-row align-items-center mb-2" >
                        
                        <div className="form-outline flex-fill mb-2 ">
                            <input type="text" id="nom" name='nom'
                                className="form-control" placeholder='votre Nom :'
                                style={{borderRadius:"10px"}}
                                ref={nameRef}
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
                                ref={firstRef} 
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
                                ref={emailRef} 
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
                                    ref={mdpRef} required                               
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
                                    ref={CmdpRef} required
                                />
                            
                        </div>
                        </div>



                        <div className="d-flex justify-content-center mx-4 mb-1 mb-lg-4">
                            <button disabled={loadingData} type="submit" className="btn btn-primary btn-block mb-4 form-control" style={{borderRaduis:"10px;", backgroundColor:"#002639",border:"none"}}>Submit</button>
                        </div>

                    </form>
                </div>
            </div>

            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    )
}

export default SignUpAdmin