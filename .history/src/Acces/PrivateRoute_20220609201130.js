import React, { useContext } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { UserContext } from '../Outils/UserContext';


function PrivateRoute({ children }) {
    const { currentUser } = useContext(UserContext);
    const Navigate = useNavigate();

    return currentUser ? children : <Navigate to="/login" />;
}



export default PrivateRoute