import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from '../Outils/UserContext';


const PrivateRoute = ({children}) => {


        const {unsubscribe} = useContext(UserContext);
        
        return unsubscribe ? children : <Navigate to="/login" />;
}


export default PrivateRoute