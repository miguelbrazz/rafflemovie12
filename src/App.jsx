import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Routes from './Routes';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes />
        <Footer />
      </Router>
    </div>
  )
}

export default App
