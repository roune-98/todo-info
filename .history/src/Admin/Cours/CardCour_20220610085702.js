import React from 'react'
import { Link } from 'react-router-dom'
import card from "./card.jpg"

const CardCour=()=> {
  return (
	<>
  <div className='container my-5'>
    <div className='row justify-content-center'>
     <div className='col col-md-4'>
        <div className="card" style={{width: "18rem;", borderRadius:"15px 15px 15px 15px" }}>
          <Link to="">
            <img src={card} className="card-img-top" alt="Sunset Over the Sea"/>
          </Link>
           <div className="card-body " 
              style={{backgroundColor:"#002639",
                     borderRadius:"0px 0px 15px 15px" }}
                    >
                     <h5 className='title-card text-white' >React JS - 3 mois</h5>
                     <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's </p>
                     <button type='button' data-bs-target='dr' className=' btn  btn-lg  h3' style={{
                             backgroundColor:"#EC5251",
                             color:"#FFF", width:"100%",
                             fontSize:"25px",
                             fontWeight:"bold",
                             borderRadius:"15px 15px" }}>Details
                      </button>
            </div>
       </div>
                        
      </div>
      <div className='col col-md-4'>
        <div className="card" style={{width: "18rem;", borderRadius:"15px 15px" }}>
          <Link to="">
            <img src={card} className="card-img-top" alt="Sunset Over the Sea"/>
          </Link>
          <div className="card-body " 
              style={{backgroundColor:"#002639",
                      borderRadius:"0px 0px 15px 15px" }}>
            <h5 className='title-card text-white' >Javascript - 3 mois</h5>
            <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's </p>
            <button type='button' className=' btn  btn-lg  h3' style={{
              backgroundColor:"#EC5251",
               color:"#FFF", width:"100%",
               fontSize:"25px",
               fontWeight:"bold",
               borderRadius:"15px 15px" }}>Details</button>
          </div>
       </div>
      </div>
      <div className='col col-md-4'>
        <div className="card" style={{width: "18rem;", borderRadius:"15px 15px" }}>
          <Link to="">
            <img src={card} className="card-img-top" alt="Sunset Over the Sea"/>
          </Link>
          <div className="card-body " 
                style={{backgroundColor:"#002639",
                        borderRadius:"0px 0px 15px 15px"
                  }}>
            <h5 className='title-card text-white' >Langage C - 3 mois</h5>
            <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's </p>
            <button type='button' className=' btn  btn-lg  h3' style={{
              backgroundColor:"#EC5251",
               color:"#FFF", width:"100%",
               fontSize:"25px",
               fontWeight:"bold",
               borderRadius:"15px 15px" }}>Details</button>
          </div>
       </div>
      </div>
    </div>
  </div>
    <Routes>
        <
    </Routes>
  </>
  )
}

export default CardCour