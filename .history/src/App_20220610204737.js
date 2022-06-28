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


function App() {
  return (
    <div class="wrapper">
    
      <Routes >
        
        <Route path='/' element={<AcceuiPricipal/>} />
        <Route path='/adminsign' element={<SignUpAdmin />}/>
        <Route path="/login" element={<Login/>} />
        
        
        <Route path='/private1' element={<PrivateRoute> <Admin /> </PrivateRoute>} />
        <Route path='/private2' element={<PrivateRoute> <Professeur/> </PrivateRoute>} />
        <Route path='/private3' element={<PrivateRoute> <DashApp /> </PrivateRoute>} />
          
        

      </Routes>
    </div>
  );
}

export default App;
