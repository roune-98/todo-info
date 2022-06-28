import React from 'react'
import Logo from "./logo.png";
import {Link} from "react-router-dom";
function Navbar() {
  return (
	<div>
		<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid" style={{backgroundolor}}>
  <Link className="navbar-brand" to="/"><img className=' w-50  img-fluid' src={Logo} alt="logo nav"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-dark"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
	<ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <Link className="nav-link  " to="/inscrire" style={{
                  backgroundColor:"#07090B",
                  color:"#fff",
                  borderRadius:"10px",
                  width:"150px",
                  padding:"10px",
                  margin : "10px"
                  
              }}>S'inscrire</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="login" style={{
                  backgroundColor:"#07090B",
                  color:"#fff",
                  borderRadius:"10px",
                  width:"150px",
                  padding:"10px",
                  margin : "10px"
              }}>Se connécté</Link>
              </li>
              
            </ul>
      
    </div>
  </div>
</nav>
	</div>
  )
}

export default Navbar