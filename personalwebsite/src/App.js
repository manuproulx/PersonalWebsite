import React, { Component } from 'react';
import './App.scss';
import TopMenu from './app/TopMenu/TopMenu';
import Home from './app/Home/Home';

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
          <div style={{height: '1000px'}}>

          </div>
        </TopMenu>
      </div>
    );
  }
}

export default App;
