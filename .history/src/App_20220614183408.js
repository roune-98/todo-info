import React from 'react';
import './App.css';
import  {Routes, Route} from "react-router-dom";
<<<<<<< HEAD
import Prof from './DashAdmin/Professeur/Prof';
import AjoutApprenent from "./DashAdmin/Apprenent/AjouterApprenent"
import Cour from './DashAdmin/Cours/Cour';
import CoursApp from './DashApprenant/Apperenent/CourApp/Components/CoursApp';
import Admin from './DashAdmin/Admin';
import Apprenent from './DashApprenant/Apperenent/Apprenent'
import ListerProf from './DashProfesseur/Professeurs/Components/ListeProf';
=======
import AcceuiPricipal from './Dashbord/AcceuilPrincipal/AcceuiPricipal';
import AccueilAdmin from './Dashbord/AccueilAdmin';
import AccueilApp from './Dashbord/AccueilApp';



import Login from './Admin/Authentification/Login';
import Inscri from './Admin/Authentification/Inscri';
import Prof from './Admin/Professeur/Prof';

import Admin from './DashAdmin/Admin';
import Apprenent from './Apperenent/Apprenent';
import EventCalendar from "./Acces/EventCalendar"
>>>>>>> 7f4890dfea2df72243cce632c8ceea81577eb825



function App() {
  return (
    <div class="wrapper">
    
      <Routes >
        <Route path='/admin' element={<Admin/>} > </Route>
        <Route path="/AjoutProf" element={<Prof/>}/>
         <Route path='/cours' element={<Cour />} /> 
        <Route path='/AjoutAppr' element={<AjoutApprenent />} />
        <Route path ='/apprenent' element={<Apprenent/>}></Route>
        <Route path ='/coursapp' element={<CoursApp/>}></Route>
        <Route path='/listeprof' element={<ListerProf/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
