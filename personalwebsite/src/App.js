import React, { Component } from 'react';
import './App.scss';
import TopMenu from './app/TopMenu/TopMenu';
import Home from './app/Home/Home';
import Experience from './app/Experience/Experience';
import Projects from './app/Projects/Projects';

class App extends Component {
  render() {
    const leftItems = [
      { as: "a", content: "About me", key: "about-me" },
      { as: "a", content: "Experience", key: "experience" },
      { as: "a", content: "My work", key: "work" },
      { as: "a", content: "Contact", key: "contact" }
    ];
    return (
      <div className="App">
        <TopMenu leftItems={leftItems}>
          <Home />
          <Experience />
          <Projects />
        </TopMenu>
      </div>
    );
  }
}

export default App;
