import React from 'react';
import './App.css';
import  {Routes, Route} from "react-router-dom";

import AcceuiPricipal from './Dashbord/AcceuilPrincipal/AcceuiPricipal';
import Login from './Acces/Login';
import SignUpAdmin from './Acces/SignUpAdmin';
import PrivateRoute from './Acces/PrivateRoute'
import ForgotPassword from"./Acces/ForgotPassword"

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
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path='/privateAdmin' element={ <Admin /> } /> */}

        <Route path="/private" element={<PrivateRoute />}>
          <Route path="/private/privateAdmin" element={<Admin />} />
          <Route path="/private/privateProfesseur" element={<Professeur />} />
          <Route path="/private/privateApprenant" element={<DashApp />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
