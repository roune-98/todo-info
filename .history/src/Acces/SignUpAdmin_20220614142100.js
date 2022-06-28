import React, { useContext, useState } from 'react';
import { UserContext } from '../Outils/UserContext';
import { Alert, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';
import { addDoc, collection, doc, setDoc } from "firebase/firestore"

import logo from "./logo.png";

const SignUpAdmin = () => {

    //variables state que j'ai créé pour recupéré les champs de saisies
    const [name, setName] = useState()
    const [firstname, setFirstname] = useState()
    const [email, setEmail] = useState()
    const [mdtpass, setMdtpass] = useState()
    const [confirmpass, setConfirmpass] = useState()
    const [role, setRole] = useState()

    //méthode création de compte que j'ai déclaré dans mon context
    const { signUp } = useContext(UserContext);

    //message d'erreur 
    const [error, setError] = useState("");
    //message de succés
    const [message, setMessage] = useState("");
    //Chargement d'envoie
    const [loadingData, setLoadingData]= useState(false)
    //Méthode de redirection
    const history = useNavigate()


    const validation = (name, firstname, email, role ) => {
        
    }

    //fONCTION d'envoie des donnés du formulaire à Firebase apès vérification
    async function handleSubmit(e) {
        e.preventDefault()

        if (name){
            error.name="Nom doit être remplir."
        }
        if (!firstname){
            error.firstname="Prénom doit être remplir."
        }
        if (!role){
            error.error="Role doit être remplir."
        }
        if (!email){
            error.email="Email doit être remplir."
        } else if(!/\S+@\S+\.\S+/.test(email)){
            error.email="Email est non valide"
        }
        if (mdtpass){
            error.mdtpass="Mot de Passe doit être remplir"
        } else if (mdtpass.length < 5){
            error.mdtpass="Mot de passe doit toujours supérieur à 5caractères"
        }
        
        if (mdtpass !== confirmpass) {
            return setError("Passwords do not match")
        }
    
        try {
            setError("")
            // setMessage("")
            setLoadingData(true)
            await signUp(email, mdtpass)

            const user = {
                name,
                firstname,
                email,
                role
            }
            addDoc(collection(db, "Users"),user);

            // setMessage('User created successfully!')
            // console.log(message);
            history("/login")
        } catch {

            setError("Failed to create an account")
        }
    
        setLoadingData(false)
    }

    return (
        <>
            <section className="vh-100" style={{backgroundColor:"#eee"}}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1 ">
                                    <img src={logo} alt="logo" className="img-fluid " />
                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2">

                                    <div className='card'>
                                        <div className='card-body'>
                                            <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">S'inscrire</p>
                                            
                                            {/* {message && <Alert variant="success">{message}</Alert>} */}
                                            {error && <Alert variant="danger">{error}</Alert>}
                                            
                                            <form className=" mt-7 w-100" onSubmit={handleSubmit} >

                                                <div className="d-flex flex-row align-items-center mb-2" >
                                                
                                                <div className="form-outline flex-fill mb-2 ">
                                                    <input 
                                                        type="text" 
                                                        id="nom" 
                                                        name='nom'
                                                        className="form-control" placeholder='votre Nom :'
                                                        style={{borderRadius:"10px"}}
                                                        value={name}
                                                        onChange={e=>setName(e.target.value)}
                                
                                                    />
                                                    
                                                </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-2">
                                                {/*formulaire prénom*/}
                                                <div className="form-outline flex-fill mb-3">
                                                    <input 
                                                        type="text" 
                                                        id="prenom"
                                                        name="prenom" className="form-control" 
                                                        placeholder=' votre Prénom :'style={{borderRadius:"10px"}}
                                                        value={firstname}
                                                        onChange={e=>setFirstname(e.target.value)}
                                 
                                                    />
                                                </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-2">
                                                {/*formulaire email*/}
                                                <div className="form-outline flex-fill mb-3">
                                                    <input 
                                                        type="email" 
                                                        id="email"
                                                        name='email' 
                                                        className="form-control" 
                                                        placeholder='votre E-mail :'style={{borderRadius:"10px"}}
                                                        value={email}
                                                        onChange={e=>setEmail(e.target.value)}
                                                          />
                                                
                                                </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-2">
                                                    {/*mot passe*/}
                                                    <div className="form-outline flex-fill mb-3">
                                                    <Form.Select  style= {{borderRadius:"10px", color:"gray"}}  value={role} onChange={e =>setRole(e.target.value)} aria-label="Default select example">
        
                                                        <option value="admin">Administrateur</option>
                                                        <option value="prof">Professeur</option>
                                                        <option value="appr">Apprenant</option>
                                                    </Form.Select>
                                                    </div>
                                                </div>
                                                

                                                <div className="d-flex flex-row align-items-center mb-2">
                                                {/*mot passe*/}
                                                <div className="form-outline flex-fill mb-3">
                                                    <input 
                                                        type="password" 
                                                        id="pass"
                                                        name='pass' 
                                                        className="form-control" 
                                                        placeholder='votre Mot passe :' 
                                                        style= {{borderRadius:"10px"}} 
                                                        value={mdtpass}
                                                        onChange={e=>setMdtpass(e.target.value)}
                                
                                                    />
                                                </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-2">
                                                {/*confirmer mot passe*/}
                                                <div className="form-outline flex-fill mb-3">
                                                    <input 
                                                        type="password" 
                                                        id="sw"
                                                        name='psw'
                                                        className="form-control" 
                                                        placeholder='confirmer Mot passe :' 
                                                        style={{borderRadius:"10px"}}
                                                        value={confirmpass}
                                                        onChange={e=>setConfirmpass(e.target.value)}
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
                </div>
            </section>

        </>
    )
}

export default SignUpAdmin