import React from 'react';
import  {Routes, Route} from "react-router-dom";
import Prof from './DashAdmin/Professeur/Prof';
import AjoutApprenent from "./DashAdmin/Apprenent/AjouterApprenent";
import Cour from './DashAdmin/Cours/Cour';
import CardCour fro
import ListerProf from './DashProfesseur/Components/ListeProf';
import DashCalende from './Acces/ComponentModal/DashCalende';
import AcceuiPricipal from './Dashbord/AcceuilPrincipal/AcceuiPricipal';
import Login from './Acces/Login';
import SignUpAdmin from './Acces/SignUpAdmin';
import PrivateRoute from './Acces/PrivateRoute'
import ForgotPassword from"./Acces/ForgotPassword"
import Admin from "./DashAdmin/Admin"
import DashApp from './DashApprenant/Apperenent/Components/DashApp';

import DashArchive from "./DashAdmin/Archive/ArchiveComp/DashArchive";



function App() {
  return (
    <div class="wrapper">
    
      <Routes >
        <Route path="/evenement" element={<DashCalende/>}></Route>
        <Route path="/AjoutProf" element={<Prof/>}/>
        <Route path='/cours' element={<Cour />} /> 
        <Route path='/AjoutAppr' element={<AjoutApprenent />} />
        <Route path ='/coursapp' element={<CardCour/>}></Route>
        <Route path='/' element={<AcceuiPricipal/>} />
        <Route path='/adminsign' element={<SignUpAdmin />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path='/privateAdmin' element={ <Admin /> } /> */}

        <Route path="/private" element={<PrivateRoute />}>
          <Route path="/private/privateAdmin" element={<Admin />} />
          <Route path="/private/privateProfesseur" element={<ListerProf />} />
          <Route path="/private/privateApprenant" element={<DashApp />} />
        </Route>

        {/*----------------Route archive---------------------*/}
        <Route path='/archives' element={<DashArchive/>} />
        
      </Routes>
    </div>
  );
}

export default App;
