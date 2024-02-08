import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Text from './components/Text';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';


function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <About/>
        <Text/>
        <Skills/>
        <Experience/>
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
