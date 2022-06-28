import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Dash from '../DashCalende'
import NavSide from "./NavSide"

const DashCalendeSimpl = () => {
    return (
        <div>
            <Header />
            <NavSide />
            <DashboardCal />
            <Footer />
        </div>
    )
}

export default DashCalendeSimpl