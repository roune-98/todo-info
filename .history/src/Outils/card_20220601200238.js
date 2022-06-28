import React from 'react'
import profil from '../assets/profil.jpg'
import './Card.css'

const Card = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col col-lg-12">
                    <div className="card mb-3 text-dark" style={{maxWidth: "540px"}} >
                        <div className="row g-0">
                            <div className="col-md-4 ">
                            <img
                                src={profil}
                                alt="Trendy Pants and Shoes"
                                className="img-fluid rounded-start"
                            />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body ">
                                
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">
                                    With supporting text below as a natural lead-in to additional content.
                                </p>
                                <a href="#" class="btn text-white btnAjout">Go somewhere</a>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card