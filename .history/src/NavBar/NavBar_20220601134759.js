import React from 'react'
import './NavBar.css'
import logo from '../assets/logo.png'
import profil from '../assets/profil.jpg'
import { CgDetailsMore } from "react-icons/cg";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Brand</a>
                </div>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="fas fa-bars"></i>
                </button>
            </nav>
        </div>
    )
}

export default NavBar