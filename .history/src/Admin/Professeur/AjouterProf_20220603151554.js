import React from 'react'
import "./AjouterProf.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsTelephonePlus } from "react-icons/bs";   


const AjouterProf = () => {
    return (
        <div classNameName='container-fluid '>
            <div classNameName='row m-lg-1'>
                <div classNameName='col col-lg-12'>
                    <form className="row row-cols-lg-auto g-4 align-items-center mt-2 ms-3 mx-3"
                        style={{ height:"100px",
                            borderRadius: "20px",
                            boxShadow: "0 2px 6px 0 rgba(236, 82, 81, .2), 0 24px 20px -24px rgba(0, 38, 57, .1)", 
                            marginTop :"5px" }}
                    >
                        <div className="col-12">
                            <label className="visually-hidden" for="inlineFormInputGroupUsername">Prènom</label>
                            <div className="input-group">
                            <div className="input-group-text"
                             style={{
                                backgroundColor: " #EC5251",
                                
                            }}
                            ><AiOutlineUserAdd classNameName='i' style={{
                                color: "#ffffff"}}/></div>
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
                            <div className="input-group-text"
                             style={{
                                backgroundColor: " #EC5251",
                               
                            }}
                            ><AiOutlineUserAdd classNameName='i' style={{
                                color: "#ffffff"}}/></div>
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
                            style={{
                                backgroundColor: " #EC5251",
                              
                            }}

                            ><BsTelephonePlus classNameName='i' style={{
                                color: "#ffffff"
                            }}/></div>
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
                            <button type="submit" className="btn btnAjout text-white"
                            style={{
                                backgroundColor:" #002639"
                            }}
                            >Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>
           
        </div>
    )
}

export default AjouterProf;