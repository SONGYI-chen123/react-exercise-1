import React, { Component } from 'react';
import './App.scss';
import Introduce from './components/introduce';
import AboutMe from './components/AboutMe';
import Educations from './components/Educations';

class App extends Component {
  render() {
    return <main className="app">
      <Introduce />
      <hr align="center" width="100%" size="1" color="#D7D7D7"/>
      <AboutMe />
      <Educations />
      </main>;
  }
}

export default App;
