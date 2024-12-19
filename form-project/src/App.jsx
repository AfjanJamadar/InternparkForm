import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InternshipApplicationForm from './InternshipApplicationForm'
import Logo from './Logo'
import OrganizationForm from './OrganizationForm'
import InternshipInfo from './InternshipInfo'
import OrganisationInfo from './OrganisationInfo'
import Success from './Success'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    {/* <OrganizationForm/> */}
   {/* <Logo/> */}
    <Router>
      <Routes>
        <Route path="/hire-interns" element={<><Logo/><OrganisationInfo/><OrganizationForm/></>} />
        <Route path="/apply-internships" element={<><Logo/><InternshipInfo/><InternshipApplicationForm /></>} />
        <Route path="/success" element={<> <Logo/><Success /> </>} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
