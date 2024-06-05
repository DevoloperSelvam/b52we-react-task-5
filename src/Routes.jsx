// src/Routes.jsx

import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
import './App.css';

// Import your components/pages
import Home from './pages/home'; // Create this component
import FullStackDevelopment from './pages/fullstack'; // Create this component
import DataScience from './pages/DataScience'; // Create this component
import CyberSecurity from './pages/CyberSecurity'; // Create this component
import Career from './pages/Career'; // Create this component

const NotFound =()=>{
  return (
    <>
    <h1>Page Not Found ,Please Check The URL</h1>
   <Link to ="/">Go home</Link>
    </>
  )
}

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/full-stack-development" element={<FullStackDevelopment />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<NotFound/>} />
      
      </Routes>
    </Router>
  );
};

export default AppRoutes;

