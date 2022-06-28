import React from 'react'
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsTelephonePlus } from "react-icons/bs";


const AjoutExemple = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col col-lg-12'>
                    <form class="row row-cols-lg-auto g-3 align-items-center">
                        <div class="col-12">
                            <label class="visually-hidden" for="inlineFormInputGroupUsername">Prènom</label>
                            <div class="input-group">
                            <div class="input-group-text"><AiOutlineUserAdd /></div>
                            <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                            </div>
                        </div>

                        <div class="col-12">
                            <label class="visually-hidden" for="inlineFormInputGroupUsername">Nom</label>
                            <div class="input-group">
                            <div class="input-group-text"><AiOutlineUserAdd /></div>
                            <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                            </div>
                        </div>

                        <div class="col-12">
                            <label class="visually-hidden" for="inlineFormInputGroupUsername">Tel</label>
                            <div class="input-group">
                            <div class="input-group-text"><BsTelephonePlus /></div>
                            <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                            </div>
                        </div>

                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AjoutExemple