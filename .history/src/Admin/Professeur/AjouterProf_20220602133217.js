import React from 'react'
import "../../Outils/AjoutExemple.css"
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsTelephonePlus } from "react-icons/bs";



const AjouterProf = () => {
    return (
        <div classNamName='container'>
            <div classNamName='row'>
                <div classNamName='col col-lg-12'>
                    <form classNam="row row-cols-lg-auto g-3 align-items-center mt-5">
                        <div classNam="col-12">
                            <label classNam="visually-hidden" for="inlineFormInputGroupUsername">Prènom</label>
                            <div classNam="input-group">
                            <div classNam="input-group-text"><AiOutlineUserAdd classNamName='i'/></div>
                            <input type="text" classNam="form-control ipt" id="inlineFormInputGroupUsername" placeholder="Nom" />
                            </div>
                        </div>

                        <div classNam="col-12">
                            <label classNam="visually-hidden" for="inlineFormInputGroupUsername">Nom</label>
                            <div classNam="input-group">
                            <div classNam="input-group-text"><AiOutlineUserAdd classNamName='i' /></div>
                            <input type="text" classNam="form-control ipt" id="inlineFormInputGroupUsername" placeholder="Prenom" />
                            </div>
                        </div>

                        <div classNam="col-12">
                            <label classNam="visually-hidden" for="inlineFormInputGroupUsername">Tel</label>
                            <div classNam="input-group">
                            <div classNam="input-group-text"><BsTelephonePlus classNamName='i'/></div>
                            <input type="text" classNam="form-control ipt" id="inlineFormInputGroupUsername" placeholder="Telephone" />
                            </div>
                        </div>

                        <div classNam="col-12">
                            <button type="submit" classNam="btn btnAjout text-white">Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>
           
        </div>
    )
}

export default AjouterProf;