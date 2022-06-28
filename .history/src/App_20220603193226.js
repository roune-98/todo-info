import React from 'react';
import './App.css';
import  {Routes, Route} from "react-router-dom";
import AcceuiPricipal from './Dashbord/AcceuilPrincipal/AcceuiPricipal';
import AccueilAdmin from './Dashbord/AccueilAdmin';
import AccueilApp from './Dashbord/AccueilApp';

import Login from './Admin/Authentification/Login';
import Inscri from './Admin/Authentification/Inscri';

import Admin from './DashAdmin/Admin';


function App() {
  return (
    <div class="wrapper">
      <Admin />
      
    </div>
  );
}

export default App;
