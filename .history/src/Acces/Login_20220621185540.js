import React, { useContext, useState } from "react";
import { UserContext } from "../Outils/UserContext";
import { Link, useNavigate } from "react-router-dom";
import alert from "sweetalert";

import logo from "./logo.png";

const SignUpAdmin = () => {
    const [email, setEmail] = useState();
    const [mdtpass, setMdtpass] = useState();

    const { signIn } = useContext(UserContext);
    const [loadingData, setLoadingData] = useState(false);
    const Navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

    try {
        setLoadingData(true);
        let user = await signIn(email, mdtpass);
        console.log(user);
        if (user.role === "admin") {
            Navigate("/private/privateAdmin");
            }
        if (user.role === "prof") {
            Navigate("/private/privateProfesseur");
        }
        if (user.role === "appr") {
            Navigate("/private/privateApprenant");
        }

        alert("Bienvenue et Bonne visite!", "cliquez sur le button!", "success"); 

    } catch {
        alert("Verifiez vos identifiants!", "cliquez sur le button!", "danger"); 
    }

    setLoadingData(false);
}

    return (
        <>
        
            <section className="vh-100" style={{backgroundColor:"#eee;"}}>

                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                    
                        <form className=" mt-7 w-100" onSubmit={handleSubmit}>
                            <div className="d-flex flex-row align-items-center mb-2">
                            {/*formulaire email*/}
                            <div className="form-outline flex-fill mb-3">
                                <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="E-mail"
                                style={{ borderRadius: "10px" }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                />
                            </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-2">
                            {/*mot passe*/}
                            <div className="form-outline flex-fill mb-3">
                                <input
                                type="password"
                                id="pass"
                                name="pass"
                                className="form-control"
                                placeholder="Mot passe"
                                style={{ borderRadius: "10px" }}
                                value={mdtpass}
                                onChange={(e) => setMdtpass(e.target.value)}
                                required
                                />
                            </div>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-1 mb-lg-4">
                            <button
                                disabled={loadingData}
                                type="submit"
                                className="btn btn-primary btn-block mb-4 form-control"
                                style={{
                                borderRaduis: "10px;",
                                backgroundColor: "#002639",
                                border: "none",
                                }}
                            >
                                Submit
                            </button>
                            </div>
                        </form>
                        <div className="w-100 text-center mt-3">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                        </div>
                    </div>
            
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
};

export default SignUpAdmin;
