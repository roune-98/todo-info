import React from 'react';
import './App.css';
import  {Routes, Route} from "react-router-dom";
import AcceuiPricipal from './Dashbord/AcceuilPrincipal/AcceuiPricipal';
import AccueilApp from './Dashbord/AccueilApp';

import Login from './Admin/Authentification/Login';
import Inscri from './Admin/Authentification/Inscri';
import Prof from './Admin/Professeur/Prof';

import Admin from './DashAdmin/Admin';
import Apprenent from './Apperenent/Apprenent';
import SignUpAdmin from './Acces/SignUpAdmin';



function App() {
  return (
    <div class="wrapper">
    
      <Routes >
        <Route path='/' element={<AcceuiPricipal/>} />
        <Route path='/adminsign' element={<SignUpAdmin />}/>
        <Route path='/appr' element={<AccueilApp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/inscrire" element={<Inscri/>}/>
        <Route path="/prof" element={<Prof/>}/>
        <Route path='/admin' element={<Admin />} />
        <Route path='/apprenant' element={<Apprenent />} />
        
      </Routes>
    </div>
  );
}

export default App;