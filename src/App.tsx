import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Work from './pages/Work/';
import About from './pages/About/';
import Skills from './pages/Skills/';
import Contact from './pages/Contact/';
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
