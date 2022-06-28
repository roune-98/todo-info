import React from 'react';
import './App.css';
import  {Routes, Route} from "react-router-dom";
import Prof from './DashAdmin/Professeur/Prof';
import AjoutApprenent from "./DashAdmin/Apprenent/AjouterApprenent"
import Cour from './DashAdmin/Cours/Cour';
import Apprenent from './Apperenent/Apprenent';
import CoursApp from './Apperenent/CourApp/Components/CoursApp';
import ListeProf from './Apperenent/ListeProf/Components/ListeProf';



function App() {
  return (
    <div class="wrapper">
    
      <Routes >
       
        <Route path="/inscrire" element={<Inscri/>}/> */}
        <Route path="/AjoutProf/*" element={<Prof/>}/>
        <Route path='/admin' element={<Admin />} />
         <Route path='/cours' element={<Cour />} /> 
        <Route path='/AjoutAppr' element={<AjoutApprenent />} />
        <Route path ='/apprenent' element={<Apprenent/>}></Route>
        <Route path ='/coursapp' element={<CoursApp/>}></Route>
        <Route path='/listeprof' element={<ListeProf/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
