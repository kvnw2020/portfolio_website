import React from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="is-preload">
      <div id="wrapper">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
    </div>
  );
}

export default App;
