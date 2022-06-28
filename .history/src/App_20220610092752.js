import React from 'react';
import './App.css';
import  {Routes, Route} from "react-router-dom";
import AcceuiPricipal from './Dashbord/AcceuilPrincipal/AcceuiPricipal';


import Login from './Admin/Authentification/Login';
import Inscri from './Admin/Authentification/Inscri';
import Prof from './Admin/Professeur/Prof';
import DashApp from "./DashApprenant/DashApp";


import Admin from './DashAdmin/Admin';

import AjoutApprenent from "./Admin/Apprenent/AjouterApprenent"
import Cour from './Admin/Cours/Cour';



function App() {
  return (
    <div class="wrapper">
    
      <Routes >
        <Route path='/' element={<AcceuiPricipal/>} />
       
       
        <Route path="/login" element={<Login/>} />
        <Route path="/inscrire" element={<Inscri/>}/>
        <Route path="/AjoutProf/*" element={<Prof/>}/>
        <Route path='/admin' element={<Admin />} />
         <Route path='/cours' element={<Cour />} /> 
        <Route path='/AjoutAppr' element={<AjoutApprenent />} />
        <Route path ='/apprenent'></Route>
        
      </Routes>
    </div>
  );
}

export default App;
