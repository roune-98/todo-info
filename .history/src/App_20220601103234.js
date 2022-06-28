import React from 'react';
import './App.css';
import  {Routes, Route} from "react-router-dom";
import AcceuiPricipal from './Dashbord/AcceuiPricipal';
import AccueilAdmin from './Dashbord/AccueilAdmin';
import AccueilApp from './Dashbord/AccueilApp';


function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<AcceuiPricipal/>} />
        <Route path='/admin' element={<AccueilAdmin/>} />
        <Route path='/appr' element={<AccueilApp/>} />
      </Routes>
    </div>
  );
}

export default App;
