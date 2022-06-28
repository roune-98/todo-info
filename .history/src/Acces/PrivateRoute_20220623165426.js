import React, {useContext} from 'react'
import {UserContext} from "../Outils/UserContext"
import {Outlet, useLocation, Navigate} from "react-router-dom"

export default function Private() {

        const {currentUser} = useContext(UserContext)
        console.log("PRIVATE", currentUser);

        if(!currentUser) {
        return <Navigate to="/login" />
        }

        return (
        <div className="container-fluid">
                <Outlet />
        </div>
)
}