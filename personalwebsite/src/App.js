import React, { Component } from 'react';
import './App.scss';
import TopMenu from './app/TopMenu/TopMenu';
import Home from './app/Home/Home';

class App extends Component {
  render() {
    const leftItems = [
      { as: "a", content: "Home", key: "home" },
      { as: "a", content: "Experience", key: "experience" },
      { as: "a", content: "Projects", key: "projects" },
      { as: "a", content: "Contact", key: "contact" }
    ];
    return (
      <div>
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
