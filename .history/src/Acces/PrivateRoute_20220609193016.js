import React, { useContext } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { UserContext } from '../Outils/UserContext';

const PrivateRoute = ({ component: Component, ...rest }) => {

        const { currentUser } = useContext(UserContext);

        const Navigate = useNavigate();
        
        return currentUser ? <Outlet /> : <Navigate to="/login" />;
}


export default PrivateRoute