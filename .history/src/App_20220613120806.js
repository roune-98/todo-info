import React from 'react';
import './App.css';
import  {Routes, Route} from "react-router-dom";

import AcceuiPricipal from './Dashbord/AcceuilPrincipal/AcceuiPricipal';
import Login from './Acces/Login';
import SignUpAdmin from './Acces/SignUpAdmin';
import PrivateRoute from './Acces/PrivateRoute'

import Admin from './DashAdmin/Admin';
import Professeur from './DashProfesseur/Professeur';
import DashApp from './DashApprenant/DashApp';
import PrivateOutlet from './Acces/PrivateOutlet';


function App() {
  return (
    <div class="wrapper">
    
      <Routes >
        
        <Route path='/' element={<AcceuiPricipal/>} />
        <Route path='/adminsign' element={<SignUpAdmin />}/>
        <Route path="/login" element={<Login/>} />
        <Route path='/privateAdmin' element={ <Admin /> } />
        <Route path='/private-outlet' element={<PrivateOutlet />}>
          <Route path='privateAdmin' element={ <Admin /> } />
          <Route path='privateProf' element={ <Professeur/> } />
          <Route path='privateApp' element={ <DashApp /> } />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
