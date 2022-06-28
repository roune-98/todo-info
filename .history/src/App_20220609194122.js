import React from 'react';
import './App.css';
import  {Routes, Route} from "react-router-dom";
import AcceuiPricipal from './Dashbord/AcceuilPrincipal/AcceuiPricipal';
import AccueilApp from './Dashbord/AccueilApp';

import Login from './Acces/Login';

import Prof from './Admin/Professeur/Prof';

import Admin from './DashAdmin/Admin';
import Apprenent from './Apperenent/Apprenent';
import SignUpAdmin from './Acces/SignUpAdmin';
import PrivateRoute from './Acces/PrivateRoute'


function App() {
  return (
    <div class="wrapper">
    
      <Routes >
        <Route path="/private" element={<PrivateRoute />}>
          <Route element={<Admin />} />
        </Route>
        <Route path='/' element={<AcceuiPricipal/>} />
        <Route path='/adminsign' element={<SignUpAdmin />}/>
        <Route path='/appr' element={<AccueilApp/>} />
        <Route path="/login" element={<Login/>} />
        
        <Route path="/prof" element={<Prof/>}/>
        <Route path='/apprenant' element={<Apprenent />} />
        
      </Routes>
    </div>
  );
}

export default App;
