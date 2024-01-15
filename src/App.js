import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Body />
      </div>
      <Footer />
    </>
  );
}

export default App;
