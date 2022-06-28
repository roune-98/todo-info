import React from 'react'

const Footer = () => {
  return (
    <div className=" text-center text-md-start" style={{backgroundColor:'#002639', color:'#ffffff'}}>
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">2BKD School Of Technology</h5>
                <p>
                 2BKD School of Technology est une école de formation 100% pratique créée par 2BKD. 
                </p>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Adresse</h5>
                <p>
                  HLM grand Yoff prés de l'AIBD.
                </p>
              </div>
       
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">En savoir plus</h5>
                <p>Veuillez vous connectez sur notre page pour plus d'informations</p>
              </div>
            </div>
          </div>
          <div className="text-center p-3" style={{color: "#ffffff"}}>
            © 2022 Copyright, interdit de reproduire le contenu
          </div>
        </div>
    // <div>
    //     <footer className="main-footer">
    //         <strong>Copyright © 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
    //         All rights reserved.
    //         <div className="float-right d-none d-sm-inline-block">
    //         <b>Version</b> 3.0.0
    //         </div>
    //     </footer>
    // </div>
  )
}

export default Footer;