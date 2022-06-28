import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../Outils/UserContext';
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const SignUpAdmin = () => {
    const emailRef = useRef()
    const mdpRef = useRef()

    const { signIn } = useContext(UserContext);
    const [error, setError] = useState("")
    const [loadingData, setLoadingData]= useState(false)
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
            setError("")
            setLoadingData(true)
            await signIn(emailRef.current.value, mdpRef.current.value)
            history("/")
        } catch {
            setError("Failed to log in")
        }
    
        setLoading(false)
    }
    

    return (
        <>
            <div className='card'>
                <div className='card-body'>
                    <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">S'inscrire</p>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <form className=" mt-7 w-100" onSubmit={handleSubmit} >

                        
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

                        <div className="d-flex justify-content-center mx-4 mb-1 mb-lg-4">
                            <button disabled={loadingData} type="submit" className="btn btn-primary btn-block mb-4 form-control" style={{borderRaduis:"10px;", backgroundColor:"#002639",border:"none"}}>Submit</button>
                        </div>

                    </form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </div>
            </div>

            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}

export default SignUpAdmin