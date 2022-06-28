
import React from 'react'
import Header from "../../../DashProfesseur/Components/Header"
import Footer from "../../../DashProfesseur/Components/Footer"
import DashboardApp from "./DashboardApp"
import NavSide from "./NavSide"
import Dashboard from './DashboardApp'

const DashApp = () => {
  return (
    <div>
        <Header />
        <NavSide />
        <DashboardApp />
        <Dashboard/>
        <Footer />
    </div>
  )
}

export default DashApp ;
// import React from 'react'
// import Header from "./Header"
// import Footer from "./Footer"
// import Dashboard from "./Dashboard"
// import NavSide from "./NavSide"

// const DashApp = () => {
//     return (
//         <div>
//             <Header />
//             <NavSide />
//             <Dashboard />
//             <Footer />
//         </div>
//     )
// }

// export default DashApp;