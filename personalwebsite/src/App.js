import React, { Component } from 'react';
import './App.scss';
import Home from './app/Home/Home';
import Experience from './app/Experience/Experience';
import Projects from './app/Projects/Projects';
import Contact from './app/Contact/Contact';
import Footer from './app/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Home />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
      </div>
    );
  }
}

export default App;
