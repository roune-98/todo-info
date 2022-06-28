import React, { useContext, useState } from 'react';
import { UserContext } from '../Outils/UserContext';
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';



import logo from "./logo.png";

const SignUpAdmin = () => {
    const [email, setEmail] = useState()
    const [mdtpass, setMdtpass] = useState()

    const { signIn } = useContext(UserContext);
    const [error, setError] = useState("")
    const [loadingData, setLoadingData]= useState(false)
    const Navigate = useNavigate();
      //message de succés
    const [message, setMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
            setError("")
            setLoadingData(true)
            let user = await signIn(email, mdtpass)
            console.log(user);
            if (user.role === "admin") {
                Navigate("/private/privateAdmin");
            }
            if (user.role === "prof") {
                Navigate("/private/privateProfesseur")
            }
            if (user.role === "appr") {
                Navigate("/private/privateApprenant")
            }
            
            setMessage("Sign in is success")
        } catch {
            setError("Failed to log in")
        }
    
        setLoadingData(false)
    }
    

    return (
        <>
            <section className="vh-100" style={{backgroundColor:"#eee;"}}>

                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                    
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1 ">
                                    <img src={logo} alt="logo" className="img-fluid mb-5" />
                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2">
                                    <div className='card'>
                                        <div className='card-body'>
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Connectez-Vous</p>
                                            {error && <Alert variant="danger">{error}</Alert>}
                                            {message && <Alert variant="success">{message}</Alert>}
                                            <form className=" mt-7 w-100" onSubmit={handleSubmit} >

                                                
                                                <div className="d-flex flex-row align-items-center mb-2">
                                                {/*formulaire email*/}
                                                <div className="form-outline flex-fill mb-3">
                                                    <input type="email" 
                                                        id="email"
                                                        name='email' 
                                                        className="form-control" 
                                                        placeholder='votre E-mail :'style={{borderRadius:"10px"}}
                                                        value={email}
                                                        onChange={e=>setEmail(e.target.value)}
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
                                                            value={mdtpass}
                                                            onChange={e=>setMdtpass(e.target.value)}
                                                            required                               
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
                                        Need an account? <Link to="/adminsign">Sign Up</Link>
                                    </div>	
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUpAdmin