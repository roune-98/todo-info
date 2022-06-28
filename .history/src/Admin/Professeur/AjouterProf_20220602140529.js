import React from 'react'
import "./AjouterProf.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsTelephonePlus } from "react-icons/bs";


const AjouterProf = () => {
    return (
        <div classNameName='container-fluid'>
            <div classNameName='row'>
                <div classNameName='col col-lg-12'>
                    <form className="row row-cols-lg-auto g-3 align-items-center mt-5"
                        style={{ height:"100px",
                            borderRadius: "20px",
                            boxShadow: "0 2px 6px 0 rgba(236, 82, 81, .2), 0 24px 20px -24px rgba(0, 38, 57, .1)", 
                            marginTop :"10px" }}
                    >
                        <div className="col-12">
                            <label className="visually-hidden" for="inlineFormInputGroupUsername">Prènom</label>
                            <div className="input-group">
                            <div className="input-group-text"><AiOutlineUserAdd classNameName='i'/></div>
                            <input type="text" className="form-control " 
                                style={{
                                    boxShadow: "0 2px 6px 0 rgba(236, 82, 81, .2), 0 24px 20px -24px rgba(0, 38, 57, .1)",  
                                    borderRadius: "10px",
                                    height: "40px"
                                }}
                            id="inlineFormInputGroupUsername" placeholder="Nom" />
                            </div>
                        </div>

                        <div className="col-12">
                            <label className="visually-hidden" for="inlineFormInputGroupUsername">Nom</label>
                            <div className="input-group">
                            <div className="input-group-text"><AiOutlineUserAdd classNameName='i' /></div>
                            <input type="text" className="form-control "
                             style={{
                                boxShadow: "0 2px 6px 0 rgba(236, 82, 81, .2), 0 24px 20px -24px rgba(0, 38, 57, .1)",  
                                borderRadius: "10px",
                                height: "40px"
                            }}
                             id="inlineFormInputGroupUsername" placeholder="Prenom" />
                            </div>
                        </div>

                        <div className="col-12">
                            <label className="visually-hidden" for="inlineFormInputGroupUsername">Tel</label>
                            <div className="input-group">
                            <div className="input-group-text"
                            {
                                background-color:  #EC5251;
                                box-shadow: 0 2px 6px 0 rgba(236, 82, 81, .2), 0 24px 20px -24px rgba(0, 38, 57, .1);   
                                border-radius: 10px;
                            }

                            ><BsTelephonePlus classNameName='i'/></div>
                            <input type="text" className="form-control " 
                                 style={{
                                    boxShadow: "0 2px 6px 0 rgba(236, 82, 81, .2), 0 24px 20px -24px rgba(0, 38, 57, .1)",  
                                    borderRadius: "10px",
                                    height: "40px"
                                }}
                            id="inlineFormInputGroupUsername" placeholder="Telephone" />
                            </div>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btnAjout text-white">Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>
           
        </div>
    )
}

export default AjouterProf;