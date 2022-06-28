import React from 'react';
import "./CardStyle.css";


function Cards() {
  return (
    <div className="container mt-2" >
        <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className="card card-block">
                    <h4 className="card-title text-right"></h4>
                  
                    <h5 className="card-title mt-3 mb-3">Card</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia quasi </p> 
                    <a href="" className="btn btn-outline-success btn-sm">Read More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards