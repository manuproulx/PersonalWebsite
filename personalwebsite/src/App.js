import React, { Component } from 'react';
import './App.scss';
import TopMenu from './app/TopMenu/TopMenu';
import Home from './app/Home/Home';
import Experience from './app/Experience/Experience';
import Projects from './app/Projects/Projects';
import Contact from './app/Contact/Contact';

class App extends Component {
  render() {
    const leftItems = [
      { as: "a", content: "About me", key: "aboutme" },
      { as: "a", content: "My work", key: "mywork" },
      { as: "a", content: "Contact", key: "contact" }
    ];
    return (
      <div className="App">
        <TopMenu leftItems={leftItems}>
          <Home />
          <Experience />
          <Projects />
          <Contact />
        </TopMenu>
      </div>
    );
  }
}

export default App;
