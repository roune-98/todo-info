import React from 'react';
import './App.css';
import  {Routes, Route} from "react-router-dom";
import AcceuiPricipal from './Dashbord/AcceuilPrincipal/AcceuiPricipal';
import AccueilAdmin from './Dashbord/AccueilAdmin';
import AccueilApp from './Dashbord/AccueilApp';

import Login from './Admin/Authentification/Login';
import Inscri from './Admin/Authentification/Inscri';
import Prof from './Admin/Professeur/Prof';

import Admin from './DashAdmin/Admin';



function App() {
  return (
    <div class="wrapper">
    
      <Routes >
        <Route path='/' element={<AcceuiPricipal/>} />
        <Route path='/admin' element={<AccueilAdmin/>} />
        <Route path='/appr' element={<AccueilApp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/inscrire" element={<Inscri/>}/>
        <Route path="/prof" element={<Prof/>}/>
        <Route path='/admin1' element={<Admin />} />
        <Route path='/apprenant' element={< />} />
        
      </Routes>
    </div>
  );
}

export default App;
