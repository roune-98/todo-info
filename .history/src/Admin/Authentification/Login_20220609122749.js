import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../Outils/UserContext';
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../../Dashbord/Navbar/Navbar";

import logo from "./logo.png";

function Login() {

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
            history("/admin")
        } catch {
            setError("Failed to log in")
        }
    
        setLoading(false)
    }

	return (
		<>
		
		<section className="vh-100" style={{backgroundColor:"#eee;"}}>
			<Navbar/>
		<div className="container h-100">
		<div className="row d-flex justify-content-center align-items-center h-100">
			<div className="col-lg-12 col-xl-11">
			
				
				<div className="row justify-content-center">
					<div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1 ">
					<img src={logo} alt="logo" className="img-fluid mb-5" />
					</div>
					<div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2">
	
					<p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Connectez-Vous</p>
					{error && <Alert variant="danger">{error}</Alert>}
					<form className="mx-1 mx-md-4" onSubmit={handleSubmit} >
						
					<div className="d-flex flex-row align-items-center mb-2">
						{/*<i className="fas fa-key fa-lg me-3 fa-fw"></i>*/}
						<div className="form-outline flex-fill mb-3">
							<input 
								type="email" 
								id="form3Example3c" 
								className="form-control " 
								placeholder='votre E-mail :'style={{borderRadius:"10px"}}/>
								ref={emailRef} 
                                required
						</div>
					</div>
	
					<div className="d-flex flex-row align-items-center mb-2">
						{/*<i className="fas fa-key fa-lg me-3 fa-fw"></i>*/}
						<div className="form-outline flex-fill mb-3">
						<input 
							type="password" 
							id="form3Example4c" 
							className="form-control " 
							placeholder='votre Mot passe :' style={{borderRadius:"10px"}} />
							ref={mdpRef}
							required 
						</div>
					</div>
						<div class="form-check d-flex justify-content-center mx-4 mb-3  ">
							<input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
							<label class="form-check-label" for="form2Example3">
								Souvien de moi
							</label>
					</div>
	
						<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
						<button disabled={loadingData} type="button" className="btn btn-primary btn-block mb-4 form-control" style={{borderRaduis:"10px;", backgroundColor:"#002639",border:"none"}}>Submit</button>
						</div>

						<div className="w-100 text-center mt-3">
							<Link to="/forgot-password">Forgot Password?</Link>
						</div>
					</form>
					<div className="w-100 text-center mt-2">
						Need an account? <Link to="/signup">Sign Up</Link>
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

export default Login