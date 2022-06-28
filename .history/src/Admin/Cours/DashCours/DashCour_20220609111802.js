import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Dashboard from "./Dashboard"
import NavSide from "./NavSide"

const DashCour = () => {
    return (
        <div>
            <Header />
            <NavSide />
            <Dashboard />
            <Footer />
        </div>
    )
}

export default DashCour