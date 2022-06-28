import React from 'react';
import './App.css';
import  {Routes, Route} from "react-router-dom";

import AcceuiPricipal from './Dashbord/AcceuilPrincipal/AcceuiPricipal';
import Login from './Acces/Login';
import SignUpAdmin from './Acces/SignUpAdmin';
import PrivateOutlet from './Acces/PrivateOutlet'

import Admin from './DashAdmin/Admin';
import Professeur from './DashProfesseur/Professeur';
import DashApp from './DashApprenant/DashApp';


function App() {
  return (
    <div class="wrapper">
    
      <Routes >
        
        <Route path='/' element={<AcceuiPricipal/>} />
        <Route path='/adminsign' element={<SignUpAdmin />}/>
        <Route path="/login" element={<Login/>} />
        
        <Route path='/*' element={<PrivateOutlet />}>
          <Route path='apprenant' element={<DashApp />} />
          <Route path="prof" element={<Professeur/>}/>
          <Route path='admin' element={<Admin />}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
