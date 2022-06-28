import React, { useContext } from 'react'
import {UserContext} from "../Outils/UserContext"
import { Outlet, Navigate } from 'react-router-dom'

function PrivateOutlet() {

    const  {currentUser} = useContext(UserContext);

    return currentUser ? <Outlet /> : <Navigate to="/" />;
}
export default PrivateOutlet