import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import MyCarousel from './components/Carousel';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <MyCarousel />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
