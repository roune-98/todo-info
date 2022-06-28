import React from 'react';
import './App.css';
import  {Routes, Route} from "react-router-dom";
import Prof from './DashAdmin/Professeur/Prof';
import AjoutApprenent from "./DashAdmin/Apprenent/AjouterApprenent"
import Cour from './DashAdmin/Cours/Cour';
import CoursApp from './DashApprenant/Apperenent/CourApp/Components/CoursApp';
import Admin from './DashAdmin/Admin';
import Apprenent from '.'
import ListerProf from './DashProfesseur/Professeurs/Components/ListeProf';



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
