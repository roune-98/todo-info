import React, { useContext } from 'react'
import {UserContext} from "../Outils/UserContext"

function PrivateOutlet() {

    const  {currentUser} = useContext(UserContext);

    return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateOutlet