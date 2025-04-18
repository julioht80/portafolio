import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './shared/pages/Layout/Layout.js';
import About from './about/pages/About.js';
import Home from './home/pages/Home.js';
import Cv from './cv/pages/Cv.js';
import Portfolio from './portfolio/pages/Portfolio.js';
import Skills from './skills/pages/skills.js';


function App() {
  
  const [tap, setTap] = useState("/");


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout tap={tap} setTap={setTap}/>}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="cv" element={<Cv />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="skills" element={<Skills />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;