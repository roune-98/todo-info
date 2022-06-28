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
              <div className="card w-100 " style={{backgroundColor:"#07090B;"}} >
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large"><BsFillCalendar2RangeFill className=" w-25 w-25 fas"/></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Evenements</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <p className="d-flex align-items-center mb-0">
                                  Date
                              </p>
                          </div>
                          <div className="col-4 mt-5 text-right">
                              <span><BsFillCalendar2RangeFill /></span>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-6">
              <div className="card w-100 " style={{backgroundColor:"#FFFFFF;"}} >
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large"><BsFillPeopleFill className="w-25 fas"/></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Cours</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <p className="d-flex align-items-center mb-0">
                                  Programmation
                              </p>
                          </div>
                          <div className="col-4 mt-5 text-right">
                              <span><BsFillBookFill /></span>
                          </div>
                      </div>
                     
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-6">
              <div className="card w-100 " style={{backgroundColor:"#ec5251;"}}>
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large"><BsFillCalendar2RangeFill className="w-25 fas"/></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Professeur</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <p className="d-flex align-items-center mb-0">
                                  Mr Diop
                              </p>
                          </div>
                          <div className="col-4 mt-5 text-right">
                              <span><BsFillPersonLinesFill /></span>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-6">
              <div className="card w-100 "  style={{backgroundColor:"#002639;"}} >
                  <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large"><BsFillCalendar2RangeFill className="w-25 fas"/></div>
                      <div className="mb-4">
                          <h5 className="card-title mb-0">Apprenant</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                          <div className="col-8">
                              <p className="d-flex align-items-center mb-0">
                                  Bakeliste
                              </p>
                          </div>
                          <div className="col-4 mt-5 text-right">
                              <span><BsFillPeopleFill className='far'/></span>
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