import React from 'react'
import "../../Outils/AjoutExemple.css"
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsTelephonePlus } from "react-icons/bs";



const AjouterProf = () => {
    return (
        <div className=''Name='container'>
            <div className=''Name='row'>
                <div className=''Name='col col-lg-12'>
                    <form className=''="row row-cols-lg-auto g-3 align-items-center mt-5">
                        <div className=''="col-12">
                            <label className=''="visually-hidden" for="inlineFormInputGroupUsername">Prènom</label>
                            <div className=''="input-group">
                            <div className=''="input-group-text"><AiOutlineUserAdd className=''Name='i'/></div>
                            <input type="text" className=''="form-control ipt" id="inlineFormInputGroupUsername" placeholder="Nom" />
                            </div>
                        </div>

                        <div className=''="col-12">
                            <label className=''="visually-hidden" for="inlineFormInputGroupUsername">Nom</label>
                            <div className=''="input-group">
                            <div className=''="input-group-text"><AiOutlineUserAdd className=''Name='i' /></div>
                            <input type="text" className=''="form-control ipt" id="inlineFormInputGroupUsername" placeholder="Prenom" />
                            </div>
                        </div>

                        <div className=''="col-12">
                            <label className=''="visually-hidden" for="inlineFormInputGroupUsername">Tel</label>
                            <div className=''="input-group">
                            <div className=''="input-group-text"><BsTelephonePlus className=''Name='i'/></div>
                            <input type="text" className=''="form-control ipt" id="inlineFormInputGroupUsername" placeholder="Telephone" />
                            </div>
                        </div>

                        <div className=''="col-12">
                            <button type="submit" className=''="btn btnAjout text-white">Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>
           
        </div>
    )
}

export default AjouterProf;