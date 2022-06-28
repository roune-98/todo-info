import React from 'react'
import "../../Outils/AjoutExemple.css"
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsTelephonePlus } from "react-icons/bs";


const AjouterProf = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col col-lg-12'>
                    <form class="row row-cols-lg-auto g-3 align-items-center mt-5">
                        <div class="col-12">
                            <label class="visually-hidden" for="inlineFormInputGroupUsername">Prènom</label>
                            <div class="input-group">
                            <div class="input-group-text"><AiOutlineUserAdd className='i'/></div>
                            <input type="text" class="form-control ipt" id="inlineFormInputGroupUsername" placeholder="Username" />
                            </div>
                        </div>

                        <div class="col-12">
                            <label class="visually-hidden" for="inlineFormInputGroupUsername">Nom</label>
                            <div class="input-group">
                            <div class="input-group-text"><AiOutlineUserAdd className='i' /></div>
                            <input type="text" class="form-control ipt" id="inlineFormInputGroupUsername" placeholder="Username" />
                            </div>
                        </div>

                        <div class="col-12">
                            <label class="visually-hidden" for="inlineFormInputGroupUsername">Tel</label>
                            <div class="input-group">
                            <div class="input-group-text"><BsTelephonePlus className='i'/></div>
                            <input type="text" class="form-control ipt" id="inlineFormInputGroupUsername" placeholder="Username" />
                            </div>
                        </div>

                        <div class="col-12">
                            <button type="submit" class="btn btnAjout text-white">Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default AjouterProf;