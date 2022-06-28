import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Prof from "./DashAdmin/Professeur/Prof";
import AjoutApprenent from "./DashAdmin/Apprenent/AjouterApprenent";
import Cour from "./DashAdmin/Cours/Cour";
import CoursApp from "./DashApprenant/Apperenent/CourApp/Components/CoursApp";
import ListerProf from "./DashProfesseur/Components/ListeProf";
import DashCalende from "./Acces/ComponentModal/DashCalende";
import AcceuiPricipal from "./Dashbord/AcceuilPrincipal/AcceuiPricipal";
import Login from "./Acces/Login";
import SignUpAdmin from "./Acces/SignUpAdmin";
import PrivateRoute from "./Acces/PrivateRoute";
import ForgotPassword from "./Acces/ForgotPassword";
import Admin from "./DashAdmin/Admin";
import DashApp from "./DashApprenant/Apperenent/Components/DashApp";

import DashCalendeSimpl from "./Acces/ComponentModal/Components/DashCalendeSimpl";
import DashArchive from "./DashAdmin/Archive/ArchiveComp/DashArchive";


import ClockLoader from "react-spinners/ClockLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div class="wrapper">
    
     
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center mt-5"
          style={{ padding: "200px" }}
        >
          <ClockLoader color={"#ec5251"} loading={loading} size={150} />
        </div>
      ) : (
        <Routes>
         
          <Route path = "/ListeEvenement" element={<DashCalendeSimpl/>}></Route>
          <Route path="/evenement" element={<DashCalende />}></Route>
          <Route path= "/listeProfesseur" element={<></>}></Route>
    
          <Route path="/AjoutProf" element={<Prof />} />
          <Route path="/cours" element={<Cour />} />

          <Route path="/AjoutAppr" element={<AjoutApprenent />} />
          <Route path="/coursapp" element={<CoursApp />}></Route>
          <Route path="/" element={<AcceuiPricipal />} />
          <Route path="/adminsign" element={<SignUpAdmin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          

          <Route path="/private" element={<PrivateRoute />}>
            <Route path="/private/privateAdmin" element={<Admin />} />
            <Route path="/private/privateProfesseur" element={<ListerProf />} />
            <Route path="/private/privateApprenant" element={<DashApp />} />
           
          </Route>

          {/*----------------Route archive---------------------*/}
          <Route path="/archives" element={<DashArchive />} />
      

      
        </Routes>
      )}
    </div>
  );
}

export default App;
