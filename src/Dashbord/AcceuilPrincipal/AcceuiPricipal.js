import React from 'react';
import './AccueilPrincipal.css';
import logo from '../AcceuilPrincipal/logo.png';
import about from '../AcceuilPrincipal/about.png';
import reactLogo from '../AcceuilPrincipal/reactLogo.png';
import js from '../AcceuilPrincipal/js.png';
import html5 from '../AcceuilPrincipal/html5.png';
import css3 from '../AcceuilPrincipal/css3.png';
import Footer from '../AcceuilPrincipal/Footer';
import {Link} from  "react-router-dom";


function AcceuilPrincipal() {
  const Etudiants = new URL( "./Etudiants.png", import.meta.url);
  return (
    <div id='/'>
      {/* navigation */}
      <nav class="navbar navbar-expand-lg navbar-light fixed-top barre">
        <a className="navbar-brand" href="#"><img src={logo} className="img-fluid logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a 
                className="nav-link lien" 
                href="#accueil" style={{color:'#ec5251'}}>Accueil <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link lien" href="#propos" style={{color:'#ec5251'}}>A propos de</a>
            </li>
            <li className="nav-item">
              <a className="nav-link lien" href="#formation" style={{color:'#ec5251'}}>Formations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link lien" href="#" style={{color:'#ec5251'}}>Contact</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link lien" to="/login" style={{color:'#ec5251'}}>Connexion</Link>
            </li>
          </ul>
        </div>
      </nav>
  
    {/* accueil */}
      <div className='container banner' id='accueil' >
        <div className='row'>
          <div className="col-lg-12">
            <img src={Etudiants} className='p-4 m-2 img-etudiants' alt='image etudiant'/>
          </div>
        </div>
      </div>

    {/* about */}
      <div className='container about' id='propos'>
        <div className="row">
          <h1 className='about-title'>A propos de </h1>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 column-left p-2">
            <img src={about} className='w-75 img-ordi'/>
          </div>
          <div className="col-lg-6 col-md-12 column-right p-5 ">
            <p className='para1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nulla recusandae soluta autem, voluptatum rerum expedita ipsam quibusdam voluptates voluptate obcaecati qui et inventore quaerat neque exercitationem provident assumenda voluptatibus?</p>
            <p className='para1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nulla recusandae soluta autem, voluptatum rerum expedita ipsam quibusdam voluptates voluptate obcaecati qui et inventore quaerat neque exercitationem provident assumenda voluptatibus?</p>
          </div>
        </div>
      </div>

      {/* Formations */}
      <div className="container-fluid formation" id='formation'>
        <div className="row">
          <h1 className='about-formation'>Formations </h1>
        </div>
        <div className=' row '>
          <div className="col">
            <div className="card card-formation" style={{width:"18rem"}}>
              <img src={reactLogo} className="card-img-top" alt="reactjs" />
              <div className="card-body cardbodytext">
                <h4>Reactjs</h4>
                <p className="card-text">bibliothéque javaScript pour la construction d'interface utilisateurs</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-formation" style={{width:"18rem"}}>
              <img src={js} className="card-img-top" alt="JavaScript"/>
              <div className="card-body cardbodytext">
                <h4>JavaScript</h4>
                <p className="card-text">permet d'implémenter des mécanismes complexes sur une page web.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-formation" style={{width:"18rem"}}>
              <img src={html5} className="card-img-top" alt="HTML5"/>
              <div className="card-body cardbodytext">
                <h4>HTML5</h4>
                <p className="card-text">Language est le code utilisé pour structurer une page web et son contenu</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-formation" style={{width:"18rem"}}>
              <img src={css3} className="card-img-top" alt="CSS3"/>
              <div className="card-body cardbodytext">
                <h4>CSS3</h4>
                <p className="card-text">CSS (Cascading Style Sheets) permet de créer des pages web à l'apparence soignée.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
        <Footer/>
  </div>
  )
}

export default AcceuilPrincipal;
