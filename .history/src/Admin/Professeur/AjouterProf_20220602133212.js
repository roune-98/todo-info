import React from 'react'
import "../../Outils/AjoutExemple.css"
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsTelephonePlus } from "react-icons/bs";



const AjouterProf = () => {
    return (
        <div claName='container'>
            <div claName='row'>
                <div claName='col col-lg-12'>
                    <form cla="row row-cols-lg-auto g-3 align-items-center mt-5">
                        <div cla="col-12">
                            <label cla="visually-hidden" for="inlineFormInputGroupUsername">Prènom</label>
                            <div cla="input-group">
                            <div cla="input-group-text"><AiOutlineUserAdd claName='i'/></div>
                            <input type="text" cla="form-control ipt" id="inlineFormInputGroupUsername" placeholder="Nom" />
                            </div>
                        </div>

                        <div cla="col-12">
                            <label cla="visually-hidden" for="inlineFormInputGroupUsername">Nom</label>
                            <div cla="input-group">
                            <div cla="input-group-text"><AiOutlineUserAdd claName='i' /></div>
                            <input type="text" cla="form-control ipt" id="inlineFormInputGroupUsername" placeholder="Prenom" />
                            </div>
                        </div>

                        <div cla="col-12">
                            <label cla="visually-hidden" for="inlineFormInputGroupUsername">Tel</label>
                            <div cla="input-group">
                            <div cla="input-group-text"><BsTelephonePlus claName='i'/></div>
                            <input type="text" cla="form-control ipt" id="inlineFormInputGroupUsername" placeholder="Telephone" />
                            </div>
                        </div>

                        <div cla="col-12">
                            <button type="submit" cla="btn btnAjout text-white">Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>
           
        </div>
    )
}

export default AjouterProf;