import React from 'react';
import "./CardStyle2.css";
import { BsFillBookFill, BsFillCalendar2RangeFill, BsFillPersonLinesFill, BsHouseFill, BsPersonBoundingBox } from "react-icons/bs";

import {
    BsFillPeopleFill,
 } from "react-icons/bs";

function CardsMultiple() {
  return (
    <div className="col-md-10 ">
      <div className="row ">
          <div className="col-xl-3 col-lg-6">
              <div className="card w-100 l-bg-cherry">
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon w-25 card-icon-large"><BsFillCalendar2RangeFill className="fas"/></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Evenements</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <p className="d-flex align-items-center mb-0">
                                  Date
                              </p>
                          </div>
                          <div className="col-4 text-right">
                              <span><BsFillCalendar2RangeFill /></span>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-6">
              <div className="card l-bg-blue-dark">
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large"><BsFillPeopleFill className="fas"/></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Cours</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <p className="d-flex align-items-center mb-0">
                                  Programmation
                              </p>
                          </div>
                          <div className="col-4 text-right">
                              <span>HTML <BsFillBookFill /></span>
                          </div>
                      </div>
                     
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-6">
              <div className="card l-bg-green-dark">
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large"><BsFillCalendar2RangeFill className="fas"/></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Professeur</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <p className="d-flex align-items-center mb-0">
                                  Mr Diop
                              </p>
                          </div>
                          <div className="col-4 text-right">
                              <span> ReactJs <BsFillPersonLinesFill /></span>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-6">
              <div className="card l-bg-orange-dark">
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large"><BsFillCalendar2RangeFill className="fas"/></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Apprenant</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <p className="d-flex align-items-center mb-0">
                                  Bakeliste
                              </p>
                          </div>
                          <div className="col-4 text-right">
                              <span> Nom <BsFillPeopleFill className='far'/></span>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}

export default CardsMultiple;