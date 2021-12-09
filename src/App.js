// import logo from './logo.svg';
import './App.css';
// import '/assets/css/style.css';
// import '/assets/css/responsive.css';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Dashboard from './Component/user/Dashboard';
import Faq from './Component/Faq/Faq';
import Contact from './Component/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
