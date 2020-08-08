import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'materialize-css'
import './CSS/tweaks.css'
import Body from './components/Body' 
import Footer from './components/Footer'
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <NavBar></NavBar>
          <Body></Body>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
