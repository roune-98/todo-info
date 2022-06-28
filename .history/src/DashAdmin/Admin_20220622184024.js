import React from 'react'
import Header from "../DashApprenant/Apperenent/Components/Header"
import Footer from "../DashApprenant/Apperenent/Components/Footer"
import Dashboard from "../DashApprenant/Apperenent/Components/Dashboard"
import NavSide from "../DashApprenant/Apperenent/Components/NavSide"

const Admin = () => {
    return (
        <div>
            <Header />
            <NavSide />
            <Dashboard />
            <Footer />
        </div>
    )
}

export default Admin